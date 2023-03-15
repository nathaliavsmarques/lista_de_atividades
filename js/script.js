let addTask = document.querySelector('#add-task');
let taskList = document.querySelector('#task-list');
let newTask = document.querySelectorAll(".new-task")
const btnSubmit = document.querySelector('#btn-submit');
const btnReset = document.querySelector('#btn-reset')

function createNewTask() {
    let li = document.createElement('li');
    let inputValue = (addTask.value);
    let liContent = document.createTextNode(inputValue);


    li.appendChild(liContent);
    li.classList.add('new-task');

    li.addEventListener('click', () =>  li.innerHTML += '✅');

    taskList.appendChild(li);
};


btnSubmit.addEventListener('click', function () {
    createNewTask();
    addTask.value = ' ';
    addTask.focus();
});

btnReset.addEventListener('click', () => taskList.innerHTML = " ")