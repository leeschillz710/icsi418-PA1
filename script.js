
/* reference to form element */
const form = document.querySelector('form');

/* reference to task input */
const taskInput = document.querySelector('#task-input');

/* reference to the priority selector */
const prioritySelector = document.querySelector('#priority-input'); 

/* reference to the task list */
const taskList = document.querySelector('#task-list');

/* array to hold the tasks */
const tasks = [];



function displayTasks() {
 
    // Clear the old display 
    taskList.innerHTML = '';

    // repeat these steps for every task
    tasks.forEach(function(task, index) {
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
        // Show whether this task is complete or not
        if (task.completed) {
            taskName.style.textDecoration = 'line-through';
            taskPriority.style.textDecoration = 'line-through';
            completeButton.textContent = 'Completed';
            completeButton.disabled = true;
        }
        // run whne this button is clicked
        completeButton.addEventListener('click', function() {
            task.completed = true;
            displayTasks();
        }

        );
    

        // Create a Delete button
        const deleteButton = document.createElement('button');
        deleteButton.type = "button";
        deleteButton.textContent = 'Delete';
        // remove this task when its button is clicked
        deleteButton.addEventListener('click', function() {
            tasks.splice(index, 1);
            displayTasks();
        });
        
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

// Listen for the form submission
form.addEventListener('submit', function(event) {
    // prevent the page from refreshing
    event.preventDefault();

    // Read inputs and remove extra spaced from name
    const taskName = taskInput.value.trim();
    const taskPriority = prioritySelector.value;

    // reject empty task names, including only spaces
    if (taskName === '') {
        alert('Task name cannot be empty.');
        taskInput.focus();
        return;
    }

    //make sure a priority is selected
    if (taskPriority === '') {
        alert('Please select a priority.');
        prioritySelector.focus();
        return;
    }

    // create a new, uncompleted task object
    const newTask = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    //store the trask and update the page
    tasks.push(newTask);
    displayTasks();

    // prepare the form for the next task
    form.reset();
    taskInput.focus();
});
