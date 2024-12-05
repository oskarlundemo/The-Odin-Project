
export {renderTodo, renderTodos}

import {Project} from './project.js'
import {Todo} from "./todo.js";

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

export function createProjectElement (projects) {

    const projectDescription = document.createElement('input');
    projectDescription.classList.add('hidden');

    const newProject = document.createElement('li');
    const listOfProjects = document.getElementById("projects");
    const currentProject = document.getElementById('projectTitle')

    listOfProjects.addEventListener('click', function (e) {

        if(e.target && e.target.nodeName === 'LI') {
            currentProject.textContent = e.target.textContent;
            console.log(e.target.textContent);
        }
    })

    projectDescription.addEventListener('keydown', (e) => {

        if(projectDescription.value.length === 0 && e.key === 'Backspace') {
            projectDescription.classList.add('hidden');

            setTimeout(() => {
                listOfProjects.lastElementChild.remove();
            }, 500);
        }

        if (e.key === 'Enter') {

            projects.addProject([], projectDescription.value);

            projectDescription.classList.add('hidden');

            setTimeout(() => {
                listOfProjects.lastElementChild.remove();
                newProject.textContent = projectDescription.value
                newProject.project = projects;

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


export function createTodoElement (projects) {

    const projectGrabber = document.getElementById('projects');

    projectGrabber.addEventListener('click', (event) => {

        if (event.target && event.target.tagName === 'li')
            console.log("event.target.projecs.dataset.id");
    })

    const newCard = document.createElement('div');
    const titleInput = document.createElement('input');

    const descriptionInput = document.createElement('textarea');
    const checkBox = document.createElement('input');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';

    checkBox.type = 'radio';

    checkBox.class = 'completedRadio';  // Add an ID for better access if needed

    const radioLabel = document.createElement('label');
    radioLabel.innerHTML = "Completed ";
    radioLabel.append(checkBox);

    const urgencyRating = document.createElement('select');

    ['Low', 'Medium', 'High'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        urgencyRating.appendChild(option);
    });


    newCard.classList.add('hidden');
    const mainGrid = document.getElementById('mainGrid');

    newCard.append(dateInput);
    newCard.append(titleInput);
    newCard.append(descriptionInput);

    newCard.appendChild(descriptionInput);
    newCard.appendChild(radioLabel);  // Append the label that contains the radio button
    newCard.appendChild(urgencyRating);

    const newTodo = new Todo({})

    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
