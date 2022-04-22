/* Arrays to Keep the Tasks To-Do/Done */
let tasksToDoStorage = [];
let tasksDoneStorage = [];

window.addEventListener("load", () => {
    const form = document.querySelector("#newTaskForm");
    const input = document.querySelector("#newTaskInput");
    const list_el = document.querySelector("#tasksList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Please, enter your task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("taskContent");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("taskInput");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        task_input_el.setAttribute("maxlength", 30);

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("taskActions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("actionEdit");
        task_edit_el.innerHTML = "EDIT";

        const task_complete_el = document.createElement("button");
        task_complete_el.classList.add("actionComplete");
        task_complete_el.innerHTML = "✔️";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("actionDelete");
        task_delete_el.innerHTML = "❌";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_complete_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value = "";

        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText == "EDIT") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "SAVE";
            } else {
                if (!task_input_el.value) {
                    alert("Please, enter your task");
                    return;
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "EDIT";
                }
            }
        });
        task_delete_el.addEventListener("click", () => {
            list_el.removeChild(task_el);
        });
    });
});

//
//
//
//
//
//
//
//
//
/* Add New Tasks | Mark Tasks as Completed | Delete Tasks */
document.querySelector("#idAddButton").onclick = function () {
    // Add New Task to the List
    if (document.querySelector("#idAddTask input").value.length > 0) {
        // Add the Task to an Array
        var newTaskInput = document.querySelector("#idAddTask input").value;
        tasksToDoStorage.push(newTaskInput);
        // Extend the List with a New Task
        document.querySelector("#idListTasksToDo").innerHTML += `
    <div class="taskToDo" id="idTaskToDo">
        ${newTaskInput}
        <div class="buttonPackage">
            <button class="buttonCompleteTask">✔️</button>
            <button class="buttonDeleteTask">❌</button>
        </div>
    </div>
    `;
        //document.querySelector("#idAddTask input").value = "";
        // Saving a Task Into a Variable
        //var taskToDoSaved = document.getElementById("#idAddTask input").value;
        // Clear a Typing Field After Submitting Task
        //document.querySelector("#idAddTask input").value = "";
    }

    // Delete Tasks

    //let tasksToDoStorage = [];
    //let tasksDoneStorage = [];

    //var taskToDelete = document.querySelectorAll(".buttonDeleteTask");
    //console.log(tasksToDoStorage.length);
    for (var i = 0; i < tasksToDoStorage.length; i++) {
        tasksToDoStorage[i].onclick = function () {
            var parentElement = this.parentNode.parentNode;
            parentElement.parentNode.removeChild(parentElement);
        };
    }
    /*
  var taskToDelete = document.querySelectorAll(".buttonDeleteTask");
  for (var i = 0; i < taskToDelete.length; i++) {
    taskToDelete[i].onclick = function () {
      var parentElement = this.parentNode.parentNode;
      parentElement.parentNode.removeChild(parentElement);
    };
  }
  */

    // Move Tasks to Completed
    var taskCompleted = document.querySelectorAll(".buttonCompleteTask");
    for (var i = 0; i < taskCompleted.length; i++) {
        taskCompleted[i].onclick = function () {
            var parentElement = this.parentNode.parentNode;
            parentElement.parentNode.removeChild(parentElement);
            // Add Completed Tasks to the List
            document.querySelector("#idListTasksDone").innerHTML += `
        <div class="taskDone">
            ${document.querySelector("#idAddTask input").value}
            <button class="buttonDeleteDoneTask">❌</button>
        </div>
        `;
            // Delete Completed Task
            var taskToDelete = document.querySelectorAll(
                ".buttonDeleteDoneTask"
            );
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
