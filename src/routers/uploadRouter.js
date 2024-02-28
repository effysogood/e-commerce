const express = require('express');
const { upload, bucket } = require('../views/upload/upload'); // 이 부분이 올바르게 임포트되었는지 확인하세요

const uploadRouter = express.Router();

// uploadRouter.js
uploadRouter.post('/', upload.single('file'), (req, res, next) => {
    try {
      // 파일이 성공적으로 업로드 되었는지 확인
      if (req.file) {
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream();
  
        blobStream.on('error', err => {
          console.error(err);
          next(err);
        });
  
        blobStream.on('finish', () => {
          // The public URL can be used to directly access the file via HTTP.
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          res.status(200).json({
            message: 'File uploaded successfully',
            fileInfo: req.file,
            url: publicUrl
          });
        });
  
        blobStream.end(req.file.buffer);
      } else {
        throw new Error('File upload failed');
      }
    } catch (error) {
      next(error);
    }
  });
  
  
  
  
  

module.exports = uploadRouter;