    let tasks = [
        { text: "See Lecture", completed: false },
        { text: "Solve assignment", completed: false }
    ];

    let currentFilter = "all";

    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const itemsLeft = document.getElementById("itemsLeft");

    const filterButtons = {
        all: document.getElementById("allButton"),
        active: document.getElementById("activeButton"),
        completed: document.getElementById("completedButton")
    };

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") return;

        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        displayTasks();
    }

    function setFilter(newFilter) {
        currentFilter = newFilter;
        displayTasks();
    }

    function displayTasks() {
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const row = document.createElement("div");
            row.className = "task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.onchange = () => {
                task.completed = checkbox.checked;
                displayTasks();
            };

            const text = document.createElement("p");
            text.className = "todo-text";
            text.innerText = task.text;
            if (task.completed) text.classList.add("completed");

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.innerText = "🗑️";
            deleteButton.onclick = () => {
                tasks.splice(index, 1);
                displayTasks();
            };

            row.appendChild(checkbox);
            row.appendChild(text);
            row.appendChild(deleteButton);

            taskList.appendChild(row);
        });
    }

    addButton.onclick = addTask;

    taskInput.onkeydown = (event) => {
        if (event.key === "Enter") addTask();
    };

    filterButtons.all.onclick = () => setFilter("all");
    filterButtons.active.onclick = () => setFilter("active");
    filterButtons.completed.onclick = () => setFilter("completed");

    displayTasks();
