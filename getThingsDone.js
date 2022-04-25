/* Arrays to Keep Data */
let usersStorage = [];
let tasksToDoStorage = [];
let tasksDoneStorage = [];

window.addEventListener("load", () => {
    /* Add a New User */
    const userForm = document.querySelector("#newUserForm");
    const userInput = document.querySelector("#newUserInput");
    const usersListElement = document.querySelector("#usersList");
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the Name is Entered */
        if (!userInput.value) {
            alert("Please, enter your name");
            return;
        }

        /* Define Element: User */
        const userElement = document.createElement("div");
        userElement.classList.add("user");

        /* Define Element: User Content */
        const userContentElement = document.createElement("div");
        userContentElement.classList.add("userContent");
        userElement.appendChild(userContentElement);

        /* Define Element: User Input */
        const userInputElement = document.createElement("input");
        userInputElement.classList.add("userInput");
        userInputElement.type = "text";
        userInputElement.value = userInput.value;
        userInputElement.setAttribute("readonly", "readonly");
        userInputElement.setAttribute("maxlength", 15);
        userContentElement.appendChild(userInputElement);

        /* Define Element: User Delete */
        const userDeleteElement = document.createElement("button");
        userDeleteElement.classList.add("userDelete");
        userDeleteElement.innerHTML = "❌";
        userElement.appendChild(userDeleteElement);

        /* Add User to the List and Clear Input  */
        usersListElement.appendChild(userElement);
        usersStorage.push(userElement);
        const userSelected = document.getElementById("selectedUser");
        userSelected.innerText = userInput.value;
        userInput.value = "";

        /* Select User on Click */
        userContentElement.addEventListener("click", () => {
            for (let i = 0; i < usersStorage.length; i++) {}
            userSelected.innerText = userInputElement.value;
            userElement.style.backgroundColor = "#B5ED7C";
        });

        /* Delete User on Click */
        userDeleteElement.addEventListener("click", () => {
            usersListElement.removeChild(userElement);
            userSelected.innerText = "Mysterious";
        });
    });

    /* Add a New Task */
    const taskForm = document.querySelector("#newTaskForm");
    const taskInput = document.querySelector("#newTaskInput");
    const tasksListElement = document.querySelector("#tasksList");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the User Entered a Task */
        if (!taskInput.value) {
            alert("Please, enter your task");
            return;
        }

        /* Define Element: Task */
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        /* Define Element: Task Content */
        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("taskContent");
        taskElement.appendChild(taskContentElement);

        /* Define Element: Task Input */
        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("taskInput");
        taskInputElement.type = "text";
        taskInputElement.value = taskInput.value;
        taskInputElement.setAttribute("readonly", "readonly");
        taskInputElement.setAttribute("maxlength", 30);
        taskContentElement.appendChild(taskInputElement);

        /* Define Element: Task Actions */
        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("taskActions");
        /* Define Element: Task Actions: Edit */
        const taskActionEditElement = document.createElement("button");
        taskActionEditElement.classList.add("actionEdit");
        taskActionEditElement.innerHTML = "EDIT";
        taskActionsElement.appendChild(taskActionEditElement);
        /* Define Element: Task Actions: Complete */
        const taskActionCompleteElement = document.createElement("button");
        taskActionCompleteElement.classList.add("actionComplete");
        taskActionCompleteElement.innerHTML = "✔️";
        taskActionsElement.appendChild(taskActionCompleteElement);
        /* Define Element: Task Actions: Delete */
        const taskActionDeleteElement = document.createElement("button");
        taskActionDeleteElement.classList.add("actionDelete");
        taskActionDeleteElement.innerHTML = "❌";
        taskActionsElement.appendChild(taskActionDeleteElement);
        taskElement.appendChild(taskActionsElement);

        /* Add Task to the List and Clear Input */
        tasksListElement.appendChild(taskElement);
        taskInput.value = "";

        /* Edit Task on Click */
        taskActionEditElement.addEventListener("click", () => {
            if (taskActionEditElement.innerText == "EDIT") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.style.cursor = "text";
                taskInputElement.focus();
                taskActionEditElement.innerText = "SAVE";
            } else {
                taskInputElement.style.cursor = "default";
                /* Forbid Submitting an Empty Task */
                if (!taskInputElement.value) {
                    alert("Please, enter your task");
                    return;
                } else {
                    taskInputElement.setAttribute("readonly", "readonly");
                    taskActionEditElement.innerText = "EDIT";
                }
            }
        });

        /* Delete Task on Click */
        taskActionDeleteElement.addEventListener("click", () => {
            tasksListElement.removeChild(taskElement);
        });
    });
});
