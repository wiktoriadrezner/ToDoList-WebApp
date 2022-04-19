document.querySelector("#idAddButton").onclick = function () {
  // Add New Task to the List
  document.querySelector("#idListTasksToDo").innerHTML += `
    <div class="taskToDo">
        ${document.querySelector("#idAddTask input").value}
        <button class="buttonCompleteTask">✔️</button>
        <button class="buttonDeleteTask">❌</button>
    </div>
    `;

  // Delete Tasks
  var taskToDelete = document.querySelectorAll(".buttonDeleteTask");
  for (var i = 0; i < taskToDelete.length; i++) {
    taskToDelete[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  // Move Tasks to Completed
  var taskCompleted = document.querySelectorAll(".buttonCompleteTask");
  for (var i = 0; i < taskCompleted.length; i++) {
    taskCompleted[i].onclick = function () {
      this.parentNode.remove();
      // Add Completed Tasks to the List
      document.querySelector("#idListTasksDone").innerHTML += `
        <div class="taskDone">
            ${document.querySelector("#idAddTask input").value}
            <button class="buttonDeleteDoneTask">❌</button>
        </div>
        `;
      // Delete Completed Task
      var taskToDelete = document.querySelectorAll(".buttonDeleteDoneTask");
      for (var i = 0; i < taskToDelete.length; i++) {
        taskToDelete[i].onclick = function () {
          this.parentNode.remove();
        };
      }
    };
  }
};
