const tasks = [];

document.getElementById('taskForm').addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault(); 

  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskId = tasks.length;
  const task = { task_id: taskId, text: taskText, done: false };
  tasks.push(task);
  taskInput.value = ''; 
  renderTasks();
}

function renderTasks() {
  const listTasks = document.querySelector('.listTasks');
  listTasks.innerHTML = '';

  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    const label = document.createElement('label');
    label.textContent = task.text;
    if (task.done) {
      label.classList.add('completed');
    }

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteBtn);

    listTasks.appendChild(taskDiv);
  });
}

function doneTask(taskId) {
  const task = tasks.find(t => t.task_id === taskId);
  if (task) {
    task.done = !task.done;
    renderTasks();
  }
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(t => t.task_id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}
