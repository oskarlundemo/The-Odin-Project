

import {Todo, TodoList} from "./todo.js";


export function createProjectElement (projects) {

    const projectDescription = document.createElement('input');
    projectDescription.classList.add('hidden');

    const newList = new TodoList();

    const newProject = document.createElement('li');
    const listOfProjects = document.getElementById("projects");
    const currentProject = document.getElementById('projectTitle')


    if (listOfProjects.lastElementChild === null ||
        listOfProjects.lastElementChild.tagName.toLowerCase() !== 'input') {
        projectDescription.classList.remove('hidden');
        listOfProjects.append(projectDescription);
    }


    listOfProjects.addEventListener('click', function (e) {
        const mainGrid = document.getElementById('mainGrid');

        if(e.target && e.target.nodeName === 'LI') {
            while (mainGrid.firstChild) {
                mainGrid.removeChild(mainGrid.firstChild);
            }
            currentProject.textContent = e.target.textContent;
            currentProject.dataset.id = e.target.dataset.id;
            renderTodos(projects, currentProject.dataset.id);
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
            projectDescription.classList.add('hidden');

            setTimeout(() => {
                projects.addProject(newList);
                listOfProjects.lastElementChild.remove();
                newProject.textContent = projectDescription.value;
                newProject.dataset.id = newList.id;
                newList.description = projectDescription.value;
                listOfProjects.append(newProject);
            }, 500);
        }
    })

    setTimeout(() => {
        projectDescription.classList.remove('hidden');
    }, 10);

    return projects;
}



function renderTodos (projects, current){

    const currentLists = [];
    console.log(projects);
    console.log(current);

    projects.projectData.forEach(listOfTodos => {

        if (listOfTodos.description.id === current) {
            currentLists.push(listOfTodos);
        }
    })

    console.log(currentLists)

}


export function createTodoElement (projects) {

    const mainGrid = document.getElementById('mainGrid');
    const currentTitle = document.getElementById('projectTitle');

    const newCard = document.createElement('div');
    const titleInput = document.createElement('input');

    const descriptionInput = document.createElement('textarea');
    const saveButton = document.createElement('button');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';

    const ratingDiv = document.createElement('div');
    const urgencyRating = document.createElement('select');
    urgencyRating.name = 'urgencyRating';
    const urgencyLabel = document.createElement('label');
    urgencyLabel.innerText = 'Urgency';
    urgencyLabel.htmlFor = 'urgencyRating';

    ratingDiv.append(urgencyLabel);
    ratingDiv.append(urgencyRating);


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

    newCard.append(descriptionInput);
    newCard.append(ratingDiv);
    newCard.append(saveButton);

    saveButton.addEventListener("click", function () {

        const newTodo = new Todo(
            titleInput.value,
            descriptionInput.value,
            dateInput.value,
            urgencyRating.value
        )


        projects.projectData.forEach(function (listOfTodos) {

            console.log("Nu är vi i dom js ");
            console.log(listOfTodos.description.description)

            if (listOfTodos.description.description === currentTitle.textContent)
                listOfTodos.addTodo(newTodo);
        })

        console.log(projects);

    })


    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
