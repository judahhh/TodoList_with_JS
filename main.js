// 유저가 할일(input값)을 입력한다.
// + 버튼을 클릭하면 할일이 추가된다.
// delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할일이 밑줄 그어진다.
// 진행 중 끝남 탭을 누르며 언더바가 이동한다.
// 끝남 탭은 끝난 아이템만, 진행 중 탭은 진행 중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTask);

let taskList = [];

function addTask() {
  let task = {
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}
function render(h) {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i].taskContent}</div>
    <div>
      <button>check</button>
      <button>delete</button>
    </div>
  </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}
