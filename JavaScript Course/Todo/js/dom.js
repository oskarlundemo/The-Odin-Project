

import {Todo, TodoList} from "./todo.js";


export function createProjectElement (projects) {

    const projectDescription = document.createElement('input');
    projectDescription.classList.add('hidden');


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

            clearMainGrid();
            currentProject.textContent = e.target.textContent;
            currentProject.dataset.id = e.target.dataset.id;
            renderTodos(projects, parseFloat(currentProject.dataset.id));
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

                listOfProjects.lastElementChild.remove();
                newProject.textContent = projectDescription.value;
                listOfProjects.append(newProject);
                newProject.dataset.id = projects.addProject(projectDescription.value);

            }, 500);
        }
    })

    setTimeout(() => {
        projectDescription.classList.remove('hidden');
    }, 10);

    return projects;
}




function clearMainGrid () {
    const mainGrid = document.getElementById('mainGrid');

    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);
    }
}




function renderTodos (projects, current){

    const currentLists = [];
    const mainGrid = document.getElementById('mainGrid');

    projects.projectData.forEach((item, index) => {

        if (item.id === current) {
            currentLists.push(...item.todos); // Spread the todos array into currentLists
        }
    });

    console.log(currentLists);
    console.log(projects);


    currentLists.forEach(todo => {

        const card = document.createElement('div');
        card.classList.add('todoCard');


        const date = document.createElement('input');
        date.type = 'date';
        date.value = todo.dueDate;

        const title = document.createElement('h2');
        title.textContent = todo.title;

        const description = document.createElement('p');
        description.textContent = todo.description;

        const priority = document.createElement('p');
        priority.textContent = `Priority: ${todo.priority}`;

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = todo.complete;


        card.appendChild(date);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(priority);
        card.appendChild(completeCheckbox);

        console.log(todo);

        mainGrid.appendChild(card);
    })

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

            if (listOfTodos.id === parseFloat(currentTitle.dataset.id))
                listOfTodos.addTodo(newTodo);
        })


        clearMainGrid();

        renderTodos(projects, parseFloat(currentTitle.dataset.id));
    })

    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
