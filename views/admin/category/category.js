document.addEventListener('DOMContentLoaded', function () {
  // 모달 열기 버튼과 모달 가져오기
  var openModalBtn1 = document.getElementById("openModalbtn1");
  var openModalBtn2 = document.getElementById("openModalbtn2");
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var addBtn = document.getElementById("add-btn");

  // 모달 열기 버튼에 이벤트 리스너 추가  
  openModalBtn1.addEventListener("click", function () {
    var pargraph = modal1.querySelector("p");
    if (pargraph) {
      pargraph.innerText = "상품 수정"
    }
    modal1.style.display = "flex";
  });
  addBtn.addEventListener("click", function () {
    var pargraph = modal1.querySelector("p");
    if (pargraph) {
      pargraph.innerText = "카테고리 추가"
    }
    modal1.style.display = "flex";
  });
  openModalBtn2.addEventListener("click", function () {
    modal2.style.display = "flex";
  });


  // 모달 닫기 함수
  modal1.addEventListener("click", function(e) {
    if (e.target !== modal1) return;
    modal1.style.display = "none";
  })
  modal2.addEventListener("click", function(e) {
    if (e.target !== modal2) return;
    modal2.style.display = "none";
  })

  // 모달 닫기 함수
  function closeModal(modal) {
    modal.style.display = "none";
  }

  // // 각 모달에 대해 클릭 이벤트 처리 - 하나로 묶어서 처리하고싶은데 잘 안되네 흠
  // document.querySelectorAll(".modal").forEach(function (modal) {
  //   modal.addEventListener("click", function (e) {
  //     if (e.target !== modal) return;
  //     modal.style.display = "none";
  //   });
  // });



  // 저장 버튼에 이벤트 리스너 추가
  var saveBtn1 = document.getElementById("save-Btn1");
  saveBtn1.onclick = function () {
    // 저장 버튼을 눌렀을 때 할 작업을 추가
    alert("저장되었습니다.");
    modal1.style.display = "none";
  };

  var saveBtn3 = document.getElementById("save-Btn3");
  saveBtn3.onclick = function () {
    // 저장 버튼을 눌렀을 때 할 작업을 추가
    alert("추가되었습니다.");
    modal3.style.display = "none";
  }

  // 삭제 버튼과 취소 버튼에 이벤트 리스너 추가
  var deleteBtn = document.getElementById("delete-Btn");
  var backBtn = document.getElementById("back-btn");

  deleteBtn.onclick = function () {
    // 실제로 삭제하는 작업 추가
    alert("카테고리가 삭제되었습니다.");
    modal2.style.display = "none";
  };

  backBtn.onclick = function () {
    modal2.style.display = "none";
  };
});