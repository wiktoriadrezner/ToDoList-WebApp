/* Arrays to Keep Data */
let usersStorage = [];
let tasksStorage = [];
let selectedUsername = "Mysterious";
let userSelectedTextElement = document.getElementById("userSelectedText");

//let enteredUser;
//let enteredTask;

// function defineUser() {
//     /* Define Element: User */
//     const userElement = document.createElement("div");
//     userElement.classList.add("user");
//     /* Define Element: User Input */
//     const userInputElement = document.createElement("div");
//     userInputElement.classList.add("userInput");
//     userInputElement.innerText = userInput.value;
//     userElement.appendChild(userInputElement);
//     /* Define Element: User Delete */
//     const userDeleteElement = document.createElement("button");
//     userDeleteElement.classList.add("userDelete");
//     userDeleteElement.innerHTML = "❌";
//     userElement.appendChild(userDeleteElement);
//     /* Add User to the List */
//     usersListElement.appendChild(userElement);
//     /* Add User to the Array */
//     usersStorage.push(userInput.value);
//     /* Clear User Input  */
//     userInput.value = "";
// }

window.addEventListener("load", () => {
    // JSON.parse(window.localStorage.getItem("users"));
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
        //defineUser();

        /* Define Element: User */
        const userElement = document.createElement("div");
        userElement.classList.add("user");
        /* Define Element: User Input */
        const userInputElement = document.createElement("div");
        userInputElement.classList.add("userInput");
        userInputElement.innerText = userInput.value;
        userElement.appendChild(userInputElement);
        /* Define Element: User Delete */
        const userDeleteElement = document.createElement("button");
        userDeleteElement.classList.add("userDelete");
        userDeleteElement.innerHTML = "❌";
        userElement.appendChild(userDeleteElement);
        /* Add User to the List */
        usersListElement.appendChild(userElement);
        /* Add User to the Array */
        usersStorage.push(userInput.value);
        /* Clear User Input  */
        userInput.value = "";

        /* Select User on Click */
        userElement.addEventListener(
            "click",
            function () {
                let userSelectedElement = document.querySelector(".selectedUser");
                if (userSelectedElement) {
                    userSelectedElement.classList.remove("selectedUser");
                }
                this.classList.add("selectedUser");
                selectedUsername = this.querySelector(".userInput").innerText;
                /* Change the Mysterious to Selected User */
                userSelectedTextElement.innerText = selectedUsername;
            },
            false
        );

        /* Delete User on Click */
        userDeleteElement.addEventListener("click", (event) => {
            /* Get the Name of a User */
            const userInputText = userInputElement.innerText;
            /* Get the Index of a User */
            const userInputIndex = usersStorage.indexOf(userInputText);
            /* Remove the User from the Array and List */
            usersStorage.splice(userInputIndex, 1);
            if (userElement.classList.contains("selectedUser")) {
                selectedUsername = "Mysterious";
                userSelectedTextElement.innerText = selectedUsername;
            }
            usersListElement.removeChild(userElement);
            event.stopImmediatePropagation();
        });
    });

    /* Add a New Task */
    const taskForm = document.querySelector("#newTaskForm");
    const taskInput = document.querySelector("#newTaskInput");
    const tasksListElement = document.querySelector("#tasksList");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the User Is Selected */
        if (selectedUsername == "Mysterious") {
            alert("Please, select a user");
            return;
        }
        /* Check Whether the User Entered a Task */
        if (!taskInput.value) {
            alert("Please, enter your task");
            return;
        }

        /* Define Element: Task */
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        /* Define Element: Task Input */
        const taskInputElement = document.createElement("div");
        taskInputElement.classList.add("taskInput");
        taskInputElement.innerText = taskInput.value;
        taskElement.appendChild(taskInputElement);
        /* Define Element: Task Actions */
        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("taskActions");
        /* Define Element: Task Actions: Selected User */
        const taskSelectedUserElement = document.createElement("div");
        taskSelectedUserElement.classList.add("taskSelectedUser");
        taskSelectedUserElement.innerText = selectedUsername;
        taskActionsElement.appendChild(taskSelectedUserElement);
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
        /* Save the Task to an Array */
        tasksStorage.push(taskInput.value);
        /* Clear Task Input  */
        taskInput.value = "";

        /* Mark Task as Done */
        taskActionCompleteElement.addEventListener("click", () => {
            taskElement.classList.toggle("taskDone");
        });

        /* Delete Task on Click */
        taskActionDeleteElement.addEventListener("click", () => {
            /* Get the Name of a Task */
            const taskInputText = taskInputElement.innerText;
            /* Get the Index of a Task */
            const taskInputIndex = tasksStorage.indexOf(taskInputText);
            /* Remove the Task from the Array and List */
            tasksStorage.splice(taskInputIndex, 1);
            tasksListElement.removeChild(taskElement);
        });
    });
});
