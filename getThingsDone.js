/* Arrays to Keep Data */
let usersStorage = [];
let tasksStorage = [];
var selectedUsername = "";

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
        /* Run a Loop Through the List of Added Users */
        var usersAdded = document.getElementsByClassName("user");
        var selected;
        for (var i = 0; i < usersAdded.length; i++) {
            usersAdded[i].addEventListener(
                "click",
                function () {
                    var userSelectedElement = document.querySelector(".selectedUser");
                    if (userSelectedElement) {
                        userSelectedElement.classList.remove("selectedUser");
                    }
                    this.classList.add("selectedUser");
                    //selected = userSelectedElement.querySelector(".userInput").innerText;
                    //console.log(selected);
                },
                false
            );
        }

        /* Change the Mysterious to Selected User */
        //var userSelectedTextElement = document.getElementById("userSelectedText");
        //userSelectedTextElement.innerText = selected;

        /* Delete User on Click */
        userDeleteElement.addEventListener("click", () => {
            /* Get the Name of a User */
            const userInputText = userInputElement.innerText;
            /* Get the Index of a User */
            const userInputIndex = usersStorage.indexOf(userInputText);
            /* Remove the User from the Array and List */
            usersStorage.splice(userInputIndex, 1);
            usersListElement.removeChild(userElement);
            // userSelectedTextElement.innerText = "Mysterious";
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
        /* Define Element: Task Input */
        const taskInputElement = document.createElement("div");
        taskInputElement.classList.add("taskInput");
        taskInputElement.innerText = taskInput.value;
        taskElement.appendChild(taskInputElement);
        /* Define Element: Task Actions */
        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("taskActions");
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

        /* Save the Task to an Array */
        tasksStorage.push(taskInputElement.value);

        /* Add Task to the List and Clear Input */
        tasksListElement.appendChild(taskElement);
        taskInput.value = "";

        /* Delete Task on Click */
        taskActionDeleteElement.addEventListener("click", () => {
            tasksListElement.removeChild(taskElement);
        });

        /* Mark Task as Done */
        taskActionCompleteElement.addEventListener("click", () => {
            taskElement.classList.toggle("taskDone");
        });
    });
});
