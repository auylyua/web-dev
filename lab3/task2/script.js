document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.querySelector('.add');
    const taskInput = document.querySelector('.task-input');
    const taskList = document.querySelector('.task-list');

    addButton.addEventListener('click', () => {
        addTask();
    });

    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        createTask(taskText);
        taskInput.value = '';
    }

    function createTask(text) {
        const li = document.createElement('li');
        const task = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const deleteButton = document.createElement('button');

        task.classList.add('taskbar');

        checkbox.type = 'checkbox';
        deleteButton.type = 'button';

        label.textContent = text;
        const img = document.createElement('img');
        img.src = 'https://image2url.com/r2/default/images/1770551299115-aec9b116-57ca-4bba-a492-e63158b5afc0.png';
        img.alt = 'Delete task';

        deleteButton.appendChild(img);

        task.appendChild(checkbox);
        task.appendChild(label);
        task.appendChild(deleteButton);

        li.appendChild(task);
        taskList.appendChild(li);

        checkbox.addEventListener('change', () => {
            task.classList.toggle('done');
        });
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
    }
});
