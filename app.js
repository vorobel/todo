// Selectors
const todoInput = document.querySelector('.todo-task-input');
const todoDesc = document.querySelector('.todo-task-description');
const todoButton = document.querySelector('.todo-button');
const todoListCompleted = document.querySelector('.todo-list-completed');
const todoListUncompleted = document.querySelector('.todo-list-uncompleted');
const listWrapper = document.querySelector('.list-wrapper');
const todoClear = document.querySelector('.todo-clear');
const todoLiWrapper = document.createElement('div');
todoLiWrapper.classList.add('todo-li-wrapper');
todoListCompleted.appendChild(todoLiWrapper);

// Eventlisteners
todoButton.addEventListener('click', addTask);
todoListCompleted.addEventListener('click', deleteTask);
todoListUncompleted.addEventListener('click', deleteTaskUncompl);
todoClear.addEventListener('click', clearTasks);



// Functions
function addTask(e) {
    e.preventDefault();
    if (todoInput.value !== '') {
        const todoLi = document.createElement('li');
        todoLi.classList.add('todo-li');
        todoLiWrapper.appendChild(todoLi);

        const todoContent = document.createElement('div');
        todoContent.classList.add('todo-content');
        todoLi.appendChild(todoContent);


        const todoTask = document.createElement('input');
        todoTask.classList.add('todo-task');
        todoTask.value = todoInput.value;
        todoTask.setAttribute('disabled', true);
        todoContent.appendChild(todoTask);

        const todoExtra = document.createElement('input');
        todoExtra.classList.add('todo-desc');
        todoExtra.value = todoDesc.value;
        todoExtra.setAttribute('disabled', true);
        todoContent.appendChild(todoExtra);

        const todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');
        todoLi.appendChild(todoButtons);

        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todo-delete');
        todoDelete.innerHTML = ('<i class="fas fa-backspace"></i>');
        todoButtons.appendChild(todoDelete);

        const todoEdit = document.createElement('button');
        todoEdit.classList.add('todo-edit');
        todoEdit.innerHTML = ('<i class="fas fa-pencil-alt"></i>');
        todoButtons.appendChild(todoEdit);

        const todoDone = document.createElement('button');
        todoDone.classList.add('todo-done');
        todoDone.innerHTML = ('<i class="fas fa-check-circle"></i>');
        todoButtons.appendChild(todoDone);


        todoInput.value = '';
        todoDesc.value = '';
        todoInput.focus();
    }
}

function deleteTask(e) {
    const item = e.target;
    const taskInput = document.querySelector('.todo-task');
    const taskDesc = document.querySelector('.todo-desc');


    if (item.classList[0] === 'todo-delete') {
        const itemParent = item.parentElement;
        const itemGranny = itemParent.parentElement;
        itemGranny.remove()
    } else if (item.classList[0] === 'todo-edit') {
        const buttonParent = item.parentElement;
        const buttonGranny = buttonParent.parentElement;
        const todoInputsWrapper = buttonGranny.firstChild;
        const todoInputTask = todoInputsWrapper.firstChild;
        const todoInputDesc = todoInputsWrapper.lastChild;
        todoInputTask.toggleAttribute('disabled');
        todoInputTask.focus();
        todoInputDesc.toggleAttribute('disabled');
    } else if (item.classList[0] === 'todo-done') {
        const buttonParent = item.parentElement;
        const buttonGranny = buttonParent.parentElement;
        buttonGranny.classList.toggle('li-done');
        const todoInputsWrapper = buttonGranny.firstChild;
        const todoInputTask = todoInputsWrapper.firstChild;
        const todoInputDesc = todoInputsWrapper.lastChild;
        todoInputTask.classList.toggle('done');
        todoInputDesc.classList.toggle('done');

        // listWrapper.style.display = 'flex';
        // const uncompletedHeader = document.createElement('h2');
        // uncompletedHeader.innerText = 'Done';
        // todoListUncompleted.appendChild(uncompletedHeader);
        const doneLi = buttonGranny.cloneNode(true);
        buttonGranny.remove();
        todoListUncompleted.appendChild(buttonGranny);
        } else if (item.classList[0] !== 'todo-task' && item.classList[0] !== 'todo-desc') {
        taskInput.setAttribute('disabled', true);
        taskDesc.setAttribute('disabled', true);
    }
}

function deleteTaskUncompl(e) {
    const item = e.target;
    const taskInput = document.querySelector('.todo-task');
    const taskDesc = document.querySelector('.todo-desc');


    if (item.classList[0] === 'todo-delete') {
        const itemParent = item.parentElement;
        const itemGranny = itemParent.parentElement;
        itemGranny.remove()
    } else if (item.classList[0] === 'todo-edit') {
        const buttonParent = item.parentElement;
        const buttonGranny = buttonParent.parentElement;
        const todoInputsWrapper = buttonGranny.firstChild;
        const todoInputTask = todoInputsWrapper.firstChild;
        const todoInputDesc = todoInputsWrapper.lastChild;
        todoInputTask.toggleAttribute('disabled');
        todoInputTask.focus();
        todoInputDesc.toggleAttribute('disabled');
    } else if (item.classList[0] === 'todo-done') {
        const buttonParent = item.parentElement;
        const buttonGranny = buttonParent.parentElement;
        buttonGranny.classList.toggle('li-done');
        const todoInputsWrapper = buttonGranny.firstChild;
        const todoInputTask = todoInputsWrapper.firstChild;
        const todoInputDesc = todoInputsWrapper.lastChild;
        todoInputTask.classList.toggle('done');
        todoInputDesc.classList.toggle('done');
        const doneLi = buttonGranny.cloneNode(true);
        buttonGranny.remove();
        todoListCompleted.appendChild(buttonGranny);




    } else if (item.classList[0] !== 'todo-task' && item.classList[0] !== 'todo-desc') {
        taskInput.setAttribute('disabled', true);
        taskDesc.setAttribute('disabled', true);
    }
}


function clearTasks(e) {
    todoLiWrapper.innerHTML = '';
    todoListUncompleted.innerHTML = '';
}