
export {renderTodo, renderTodos}

import {Project} from './project.js'

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

export function createProjectElement () {

    const projectDescription = document.createElement('input');
    projectDescription.classList.add('hidden');

    const newProject = document.createElement('li');
    const listOfProjects = document.getElementById("projects");

    projectDescription.addEventListener('keydown', (e) => {

        if(projectDescription.value.length === 0 && e.key === 'Backspace') {
            projectDescription.classList.add('hidden');

            setTimeout(() => {
                listOfProjects.lastElementChild.remove();
            }, 500);
        }

        if (e.key === 'Enter') {

            const createNewProject = new Project(projectDescription.value)

            projectDescription.classList.add('hidden');

            setTimeout(() => {
                listOfProjects.lastElementChild.remove();
                newProject.textContent = projectDescription.value


                listOfProjects.append(newProject);
            }, 500);

        }
    })


    setTimeout(() => {
        projectDescription.classList.remove('hidden');
    }, 10);

    if (listOfProjects.lastElementChild.tagName.toLowerCase() !== 'input') {
        listOfProjects.append(projectDescription);
    }
}


export function createTodoElement () {
    const newCard = document.createElement('div');
    newCard.classList.add('hidden')
    const mainGrid = document.getElementById('mainGrid');

    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
