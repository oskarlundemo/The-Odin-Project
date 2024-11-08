
export {renderTodo, renderTodos}

const renderTodo = (todo) => {
    const todoElement = document.createElement('li');
    todoElement.textContent = todo.title;
    todoElement.classList.add('todo-item');

    if (todo.completed) {
        todoElement.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id);
    });

    const priorityButton = document.createElement('button');
    priorityButton.textContent = 'Change Priority';
    priorityButton.addEventListener('click', () => {
        changePriority(todo.id);
    });

    todoElement.appendChild(deleteButton);
    todoElement.appendChild(priorityButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(todoElement);
}


const renderTodos = (todos) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        todoList.appendChild(renderTodos(todo));
    });
}

export function createTodoElement () {
    const todoContainer = document.createElement('div');
    const mainGrid = document.getElementById('mainGrid');

    const test = document.createElement('h1');

    todoContainer.innerHTML = test;

    mainGrid.appendChild(todoContainer);
    alert('Oskar')
}
