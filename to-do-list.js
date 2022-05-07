/* IMPLEMENTATION */
let taskIsDone;
/* Array to Store Users */
let usersStorage = [];
/* Array to Store Tasks and Assigned User */
let tasksStorage = [];
/* Set Default User and Greeting to Be Mysterious */
let selectedUsername = "Mysterious";
let userSelectedTextElement = document.getElementById("userGreetingName");

/* ACTIONS ON USER */
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

    /* SELECT USER ON CLICK */
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
            /* Select Tasks That Match Selected User */
            let allTasks = document.getElementsByClassName("task");
            for (let i = 0; i < allTasks.length; i++) {
                let loopUserName = allTasks[i].querySelector(".taskSelectedUser").innerText;
                if (loopUserName === selectedUsername) {
                    if (allTasks[i].classList.contains("taskNotSelected")) {
                        allTasks[i].classList.remove("taskNotSelected");
                    }
                    allTasks[i].classList.add("taskSelected");
                } else {
                    if (allTasks[i].classList.contains("taskSelected")) {
                        allTasks[i].classList.remove("taskSelected");
                    }
                    allTasks[i].classList.add("taskNotSelected");
                }
            }
        },
        false
    );

    /* DELETE USER ON CLICK */
    userDeleteElement.addEventListener("click", (event) => {
        /* Get the Name of the User */
        const userInputText = userInputElement.innerText;
        /* Get the Index of the User */
        const userInputIndex = usersStorage.indexOf(userInputText);
        /* Remove the User from the Array */
        usersStorage.splice(userInputIndex, 1);
        /* Update Local Storage */
        localStorage.savedUsers = JSON.stringify(usersStorage);
        /* Change the Greeting Name If Not Selected */
        if (userElement.classList.contains("selectedUser")) {
            selectedUsername = "Mysterious";
            userSelectedTextElement.innerText = selectedUsername;
        }
        /* Remove the User from the List */
        usersListElement.removeChild(userElement);
        event.stopImmediatePropagation();
    });
}

/* ACTIONS ON TASK */
function defineAddTask(valueTask, selectedUsername) {
    const tasksListElement = document.querySelector("#tasksList");
    /* Define Element: Task */
    const taskElement = document.createElement("div");
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

    /* Add Task to the List */
    tasksListElement.appendChild(taskElement);
    /* Apply Class If the User is Selected */
    if (userSelectedTextElement.innerText !== "Mysterious") {
        taskElement.classList.add("taskSelected");
    }

    /* UPDATE DONE TASKS FROM LOCAL STORAGE */
    if (taskIsDone === "1") {
        taskElement.classList.add("taskDone");
        taskIsDone = "0";
    } else if (taskIsDone === "0") {
        taskElement.classList.remove("taskDone");
    }

    /* MARK TASK AS DONE */
    taskActionCompleteElement.addEventListener("click", () => {
        /* Get the Name of the Task */
        let taskInputText = taskInputElement.innerText;
        let taskInputUser = taskSelectedUserElement.innerText;
        for (let i = 0; i < tasksStorage.length; i++) {
            /* Find the Pair in the Array */
            if (tasksStorage[i].task === taskInputText && tasksStorage[i].user === taskInputUser) {
                /* 0 - Task Is Not Done, 1 - Task Is Done */
                if (tasksStorage[i].ifDone === "0") {
                    tasksStorage[i].ifDone = "1";
                    taskElement.classList.add("taskDone");
                    /* Update Local Storage */
                    localStorage.savedTasks = JSON.stringify(tasksStorage);
                } else if (tasksStorage[i].ifDone === "1") {
                    tasksStorage[i].ifDone = "0";
                    taskElement.classList.remove("taskDone");
                    /* Update Local Storage */
                    localStorage.savedTasks = JSON.stringify(tasksStorage);
                }
            }
        }
    });

    /* DELETE TASK ON CLICK */
    taskActionDeleteElement.addEventListener("click", () => {
        /* Get the Name of the Task */
        let taskInputText = taskInputElement.innerText;
        /* Get the Index of the Task */
        let taskInputIndex = tasksStorage.findIndex((item) => item.task === taskInputText);
        /* Remove the Task from the Array */
        tasksStorage.splice(taskInputIndex, 1);
        /* Update Local Storage */
        localStorage.savedTasks = JSON.stringify(tasksStorage);
        /* Remove the Task from the List */
        tasksListElement.removeChild(taskElement);
    });
}

window.addEventListener("load", () => {
    /* GET USER DATA FROM LOCAL STORAGE */
    if (localStorage.getItem("savedUsers") !== null) {
        usersStorage = JSON.parse(localStorage.getItem("savedUsers"));
        for (let i = 0; i < usersStorage.length; i++) {
            defineAddUser(usersStorage[i]);
        }
    }

    /* GET TASK DATA FROM LOCAL STORAGE */
    if (localStorage.getItem("savedTasks") !== null) {
        tasksStorage = JSON.parse(localStorage.getItem("savedTasks"));
        for (let i = 0; i < tasksStorage.length; i++) {
            // Check the Array for Done Tasks
            if (tasksStorage[i].ifDone === "1") {
                taskIsDone = "1"; // Task Is Done
            } else if (tasksStorage[i].ifDone === "0") {
                taskIsDone = "0"; // Task Is Not Done
            }
            defineAddTask(tasksStorage[i].task, tasksStorage[i].user);
        }
    }

    /* ADD NEW USER */
    const userForm = document.querySelector("#newUserForm");
    const userInput = document.querySelector("#newUserInput");
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the Name is Entered */
        if (!userInput.value) {
            alert("Please, enter your name");
            return;
        }
        /* Call Function to Update/Create User */
        defineAddUser(userInput.value);
        /* Save User to Array */
        usersStorage.push(userInput.value);
        /* Save User to Local Storage */
        localStorage.savedUsers = JSON.stringify(usersStorage);
        /* Clear User Input */
        userInput.value = "";
    });

    /* ADD NEW TASK */
    const taskForm = document.querySelector("#newTaskForm");
    const taskInput = document.querySelector("#newTaskInput");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        /* Check Whether the User Is Selected */
        if (selectedUsername == "Mysterious") {
            alert("Please, select a user");
            return;
        }
        /* Check Whether the User Entered the Task */
        if (!taskInput.value) {
            alert("Please, enter your task");
            return;
        }
        /* Call Function to Update/Create Task */
        defineAddTask(taskInput.value, selectedUsername);
        /* Save Task to Array */
        tasksStorage.push({
            task: taskInput.value,
            user: selectedUsername,
            ifDone: "0", // Task is Not Done
        });
        /* Save Task to Local Storage */
        localStorage.savedTasks = JSON.stringify(tasksStorage);
        /* Clear Task Input */
        taskInput.value = "";
    });
});
