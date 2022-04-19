document.querySelector("#idAddButton").onclick = function () {
  document.querySelector("#idListTasksToDo").innerHTML += `
            <div class="taskToDo">
                    ${document.querySelector("#idAddTask input").value}
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
