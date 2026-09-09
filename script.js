
/* reference to form element */
const form = document.querySelector('form');

/* reference to task input */
const taskInput = document.querySelector('#task-input');

/* reference to the priority selector */
const prioritySelector = document.querySelector('#priority-input'); 

/* reference to the task list */
const taskList = document.querySelector('#task-list');

/* array to hold the tasks */
const tasks = [
    { name: "Task 1", priority: "High" },
    { name: "Task 2", priority: "Medium" },
    { name: "Task 3", priority: "Low" }
];



function displayTasks() {
 
    // Clear the old display 
    taskList.innerHTML = '';

    // repeat these steps for every task
    tasks.forEach(function(task) {
        // create a new row to hold task data
        const taskRow = document.createElement('div');

        // Show its name
        const taskName = document.createElement('span');
        taskName.textContent = task.name;

        // Show its priority
        const taskPriority = document.createElement('span');
        taskPriority.textContent = " -- Priority: " + task.priority + " ";


        // Create a Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.type = "button";

        // Create a Delete button
        const deleteButton = document.createElement('button');
        deleteButton.type = "button";
        deleteButton.textContent = 'Delete';
        
        // put everything into this task's row
        taskRow.append(
            taskName,
            taskPriority,
            completeButton,
            deleteButton
        );
       
        // put finished row on the page
        taskList.appendChild(taskRow);
    })
}

// Run the function to display the current tasks.
displayTasks();