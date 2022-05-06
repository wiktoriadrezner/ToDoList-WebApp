/* Arrays to Keep Data */
let usersStorage = [];
let tasksStorage = [];

let taskElement;
let selectedUsername = "Mysterious";
let taskSelectedUserElement;
let userSelectedTextElement = document.getElementById("userGreetingName");

function defineAddUser(valueUser) {
    const usersListElement = document.querySelector("#usersList");
    /* Define Element: User */
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    /* Define Element: User Input */
    const userInputElement = document.createElement("div");
    userInputElement.classList.add("userInput");
    userInputElement.innerText = valueUser;
    userElement.appendChild(userInputElement);
    /* Define Element: User Delete */
    const userDeleteElement = document.createElement("button");
    userDeleteElement.classList.add("userDelete");
    userDeleteElement.innerHTML = "❌";
    userElement.appendChild(userDeleteElement);

    /* Add User to the List */
    usersListElement.appendChild(userElement);

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
            /* Change the Greeting to Selected User */
            userSelectedTextElement.innerText = selectedUsername;
            /* Loop Through the Array of Tasks */
            // for (let i = 0; i < tasksStorage.length; i++) {
            //     if (selectedUsername == tasksStorage[i].user) {
            //         tasksStorage[i].style.backgroundColor = "#be9c95";
            //     } else {
            //         tasksStorage[i].style.backgroundColor = "#d6c1b4";
            //     }
            // }
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
}

function defineAddTask(valueTask) {
    const tasksListElement = document.querySelector("#tasksList");
    /* Define Element: Task */
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    /* Define Element: Task Input */
    const taskInputElement = document.createElement("div");
    taskInputElement.classList.add("taskInput");
    taskInputElement.innerText = valueTask;
    taskElement.appendChild(taskInputElement);
    /* Define Element: Task Actions */
    const taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("taskActions");
    /* Define Element: Task Actions: Selected User */
    taskSelectedUserElement = document.createElement("div");
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

    /* Add Task to the List */
    taskElement.style.backgroundColor = "#be9c95";
    tasksListElement.appendChild(taskElement);

    /* Mark Task as Done */
    taskActionCompleteElement.addEventListener("click", () => {
        taskElement.classList.toggle("taskDone");
    });

    /* Delete Task on Click */
    taskActionDeleteElement.addEventListener("click", () => {
        /* Get the Name of a Task */
        let taskInputText = taskInputElement.innerText;
        /* Get the Index of a Task */
        let taskInputIndex = tasksStorage.findIndex((item) => item.task === taskInputText);
        /* Remove the Task from the Array and List */
        tasksStorage.splice(taskInputIndex, 1);
        tasksListElement.removeChild(taskElement);
        console.log(tasksStorage);
    });
}

window.addEventListener("load", () => {
    /* Add a New User */
    const userForm = document.querySelector("#newUserForm");
    const userInput = document.querySelector("#newUserInput");
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the Name is Entered */
        if (!userInput.value) {
            alert("Please, enter your name");
            return;
        }

        /* Call a Function to Update/Create User */
        defineAddUser(userInput.value);

        /* Save User to the Array */
        usersStorage.push(userInput.value);
        /* Clear User Input  */
        userInput.value = "";
    });

    /* Add a New Task */
    const taskForm = document.querySelector("#newTaskForm");
    const taskInput = document.querySelector("#newTaskInput");
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

        /* Call a Function to Update/Create Task */
        defineAddTask(taskInput.value);

        /* Save Task to the Array */
        tasksStorage.push({
            task: taskInput.value,
            user: selectedUsername,
        });
        console.log(tasksStorage);

        /* Clear Task Input  */
        taskInput.value = "";
    });

    //

    // class="taskSelectedUser"
    /*
    let userSelectedElement = document.querySelector(".selectedUser");
            if (userSelectedElement) {
                userSelectedElement.classList.remove("selectedUser");
            }
            this.classList.add("selectedUser");
            selectedUsername = this.querySelector(".userInput").innerText;
            userSelectedTextElement.innerText = selectedUsername;
    */
});
