

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
        if(e.target && e.target.nodeName === 'LI') {
            currentProject.textContent = e.target.textContent;
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


    console.log(projects);
    return projects;
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


        console.log(currentTitle.textContent);
        projects.projectData.forEach(function (t) {

            if (t.description === currentTitle.textContent)
                t.addTodo(newTodo);

            console.log(t);
        })

        console.log(projects)
    })


    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
