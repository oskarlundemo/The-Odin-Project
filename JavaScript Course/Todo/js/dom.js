

import {Todo, TodoList} from "./todo.js";


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

            projects.addProject(projectDescription.value);
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

    const mainGrid = document.getElementById('mainGrid');
    const testHead = document.getElementById('projectTitle');

    const projectGrabber = document.getElementById('projects');

    projectGrabber.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'li')
            console.log("event.target.projecs.dataset.id");
    })

    const newCard = document.createElement('div');
    const titleInput = document.createElement('input');

    const descriptionInput = document.createElement('textarea');
    const saveButton = document.createElement('button');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';

    const urgencyRating = document.createElement('select');

    ['Low', 'Medium', 'High'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        urgencyRating.appendChild(option);
    });

    saveButton.textContent = 'Save';
    newCard.classList.add('hidden');

    newCard.append(dateInput);
    newCard.append(titleInput);
    newCard.append(descriptionInput);

    newCard.appendChild(descriptionInput);
    newCard.appendChild(urgencyRating);
    newCard.append(saveButton);

    saveButton.addEventListener("click", function () {

        const newTodo = new Todo(
            titleInput.value,
            descriptionInput.value,
            dateInput.value,
            urgencyRating.value
        )

        console.log(testHead.textContent);
        const findProject = projects.projectData.find(project => project.description === testHead.textContent);
        console.log(findProject)

    })


    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
