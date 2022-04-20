/* Adding New Tasks | Marking Tasks as Completed | Deleting Tasks */
document.querySelector("#idAddButton").onclick = function () {
  // Add New Task to the List
  if (document.querySelector("#idAddTask input").value.length > 0) {
    document.querySelector("#idListTasksToDo").innerHTML += `
    <div class="taskToDo">
         ${document.querySelector("#idAddTask input").value}
        <button class="buttonCompleteTask">✔️</button>
        <button class="buttonDeleteTask">❌</button>
    </div>
    `;
    // Saving a Task Into a Variable
    //var taskToDoSaved = document.getElementById("#idAddTask input").value;
    // Clear a Typing Field After Submitting Task
    //document.querySelector("#idAddTask input").value = "";
  }

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

/* Adding New Users */
document.querySelector("#idConfirmUser").onclick = function () {
  // Add New User to the List
  if (document.querySelector("#idAddNewUser input").value.length > 0) {
    document.querySelector("#idListUsers").innerHTML += `
      <div class="newUser" id="idNewUser">
           ${document.querySelector("#idAddNewUser input").value}
           <button class="buttonDeleteUser">❌</button>
      </div>
      `;
  }

  // Select a User
  var userSelected = document.querySelectorAll(".newUser");
  for (var i = 0; i < userSelected.length; i++) {
    userSelected[i].onclick = function () {
      this.style.backgroundColor = "#abd567";
    };
  }

  // Delete a User
  var userToDelete = document.querySelectorAll(".buttonDeleteUser");
  for (var i = 0; i < userToDelete.length; i++) {
    userToDelete[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
