let taskCount = 0;

document.getElementById('add-task-button').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText) {
        taskCount++;
        var taskList = document.getElementById('task-list');
        var taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <span class="task-number">Task ${taskCount}: </span>
            <span>${taskText}</span>
            <button onclick="deleteTask(this)"><i class="fas fa-trash-alt"></i></button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = ''; 
    }
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
    var tasks = document.querySelectorAll('#task-list .task-item');
    taskCount = 0;
    tasks.forEach(task => {
        taskCount++;
        task.querySelector('.task-number').textContent = `Task ${taskCount}: `;
    });
}
