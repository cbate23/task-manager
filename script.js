document.addEventListener('DOMContentLoaded', function () {
  const newTaskInput = document.getElementById('newTask');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
                ${taskText}
                <button class="deleteTask">Delete</button>
            `;
      taskList.appendChild(taskItem);
      newTaskInput.value = '';
    }
  });

  taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteTask')) {
      event.target.parentElement.remove();
    }
  });
});
