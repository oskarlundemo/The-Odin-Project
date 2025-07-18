

import {Todo, TodoList} from "./todo.js";


export function createProjectElement (projects) {

    const projectDescription = document.createElement('input');
    projectDescription.classList.add('hidden');

    const newProject = document.createElement('li');
    const listOfProjects = document.getElementById("projects");
    const currentProject = document.getElementById('projectTitle')

    if (listOfProjects.lastElementChild === null ||
        listOfProjects.lastElementChild.tagName.toLowerCase() !== 'input') {

        setTimeout(() => {
            projectDescription.classList.remove('hidden');
        }, 10);

        listOfProjects.append(projectDescription);
    }

    listOfProjects.addEventListener('click', function (e) {

        const editMenuProject = document.getElementById('projectSettings');

        if(e.target && e.target.nodeName === 'LI') {
            clearMainGrid();
            currentProject.textContent = e.target.textContent;
            currentProject.dataset.id = e.target.dataset.id;
            editMenuProject.classList.remove('hidden');

            const addBtn = document.getElementById('addTodoBtn');
            addBtn.classList.remove('buttonTest');

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

        if (e.key === 'Enter' && projectDescription.value.trim().length > 0) {
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


    const editProjectTitle = document.getElementById('editProjectTitle');

    editProjectTitle.addEventListener('click', e => {

        const editTitleInput = document.createElement('input');
        currentProject.replaceWith(editTitleInput);
        editTitleInput.value = currentProject.textContent;
        editTitleInput.id = "editInpt";

        editTitleInput.addEventListener('keydown', e => {
            if (e.key === 'Enter' && editTitleInput.value.trim().length > 0) {

                const id = parseFloat(currentProject.dataset.id);

                projects.projectData.forEach(listOfTodos => {
                    if (listOfTodos.id === id) listOfTodos.editTodoListName(editTitleInput.value);

                    currentProject.textContent = editTitleInput.value;
                    editTitleInput.replaceWith(currentProject);
                })

                const getLiElements = document.getElementById('projects')
                const updateList = Array.from(getLiElements.children);

                updateList.forEach(project => {
                    if (parseFloat(project.dataset.id) === id)
                        project.textContent = currentProject.textContent;
                })
            }
        })

    })

    const deleteProject = document.getElementById('deleteProject');

    deleteProject.addEventListener('click', e => {
        const id = parseFloat(currentProject.dataset.id);
        projects.deleteProject(id);

        const getLiElements = document.getElementById('projects')
        const updateList = Array.from(getLiElements.children);
        const projectSetting = document.getElementById('projectSettings')

        updateList.forEach(project => {
            if (parseFloat(project.dataset.id) === id)
                project.remove();
        })

        const addBtn = document.getElementById('addTodoBtn');
        addBtn.classList.add('buttonTest');

        currentProject.textContent = '';
        currentProject.dataset.id = '';
        projectSetting.classList.add('hidden');
    })

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

    currentLists.forEach(todo => {

        const card = document.createElement('div');
        card.classList.add('todoCard');
        card.classList.add('hidden');

        card.dataset.id = todo.id;

        const headerIcons = document.createElement('div');
        const editIcon = document.createElement('img');
        editIcon.src = './icons/edit.svg';
        editIcon.classList.add("editdelete");
        editIcon.id = "edit";

        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add("editdelete");
        deleteIcon.src = './icons/delete.svg';

        deleteIcon.addEventListener("click", (event) =>
            deleteTodo(event, projects));


        editIcon.addEventListener("click", (event) =>
            editTodo(event, projects));

        const date = document.createElement('input');
        date.type = 'date';
        date.value = todo.dueDate;
        date.disabled = true;
        date.id = "dateRender";

        headerIcons.appendChild(date);
        headerIcons.appendChild(editIcon);
        headerIcons.appendChild(deleteIcon);


        const title = document.createElement('input');
        title.value = todo.title;
        title.disabled = true;
        title.id = "titleRender";

        const description = document.createElement('textarea');
        description.value = todo.description;
        description.disabled = true;
        description.id = "descriptionRender";

        const ratingDiv = document.createElement('div');
        const urgencyRating = document.createElement('select');
        urgencyRating.name = 'urgencyRating';
        urgencyRating.id = "urgencyRender";

        const urgencyLabel = document.createElement('label');
        urgencyLabel.innerText = 'Priority';
        urgencyLabel.htmlFor = 'urgencyRating';

        ratingDiv.append(urgencyLabel);
        ratingDiv.append(urgencyRating);
        urgencyRating.disabled = true;


        ['Low', 'Medium', 'High'].forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            urgencyRating.appendChild(option);
        });

        urgencyRating.value = todo.priority;

        const priority = document.createElement('p');
        priority.textContent = `Priority: ${todo.priority}`;

        const footerContainer = document.createElement('div');
        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.classList.add('custom-checkbox')
        completeCheckbox.checked = todo.complete;
        completeCheckbox.id = 'completeCheckbox';

        const labelComplete = document.createElement('label');
        labelComplete.innerText = 'Completed';
        labelComplete.htmlFor = 'completeCheckbox';

        footerContainer.appendChild(labelComplete);
        footerContainer.appendChild(completeCheckbox);


        card.appendChild(headerIcons);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(ratingDiv);
        card.appendChild(footerContainer);

        setTimeout(() => {
            card.classList.remove('hidden');
        }, 10);

        mainGrid.append(card);
    })

}


function deleteTodo (event, projects) {
    const currentTitle = document.getElementById('projectTitle');

    projects.projectData.forEach(listOfTodos => {
        const todo = listOfTodos.todos.filter(todo => todo.id ===
            parseFloat(event.target.parentNode.parentNode.dataset.id));

        if (todo) listOfTodos.deleteTodo(parseFloat(event.target.parentNode.parentNode.dataset.id))
    })

    clearMainGrid();
    renderTodos(projects, parseFloat(currentTitle.dataset.id))

}


function editTodo (event, projects) {

    const editIcon = document.getElementById('edit');
    const card = Array.from(event.target.parentNode.parentNode.children);

    if (editIcon.src.includes('edit.svg')) {
        editIcon.src = './icons/check.svg';
        enableInput(card);
    } else {
        editIcon.src = './icons/edit.svg';

        const title = document.getElementById('titleRender');
        const date = document.getElementById('dateRender');
        const description = document.getElementById('descriptionRender');
        const urgencyRating = document.getElementById('urgencyRender');
        const completeCheckbox = document.getElementById('completeCheckbox');

            projects.projectData.forEach(listOfTodos => {
                const todo = listOfTodos.todos.filter(todo => todo.id ===
                    parseFloat(event.target.parentNode.parentNode.dataset.id));

                if (todo) {

                    listOfTodos.editTodo(
                        parseFloat(event.target.parentNode.parentNode.dataset.id),
                        title.value,
                        description.value,
                        date.value,
                        urgencyRating.value,
                        completeCheckbox.checked
                    )
                }
            })

            disableInput(card);
    }

}

function enableInput (arrayOfChildren) {

    arrayOfChildren.forEach(element => {

        if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.disabled) {
            element.disabled = false;
        }

        if (element.hasChildNodes()) {
            const children = Array.from(element.children);

            children.forEach(child => {
                if (child.tagName === 'INPUT' || child.tagName === 'SELECT') {
                    child.disabled = false;
                }
            });
        }
    })
}

function disableInput (arrayOfChildren) {

    arrayOfChildren.forEach(element => {

        if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && !element.disabled) {
            element.disabled = true;
        }

        if (element.hasChildNodes()) {
            const children = Array.from(element.children);

            children.forEach(child => {
                if (child.tagName === 'INPUT' || child.tagName === 'SELECT') {
                    child.disabled = true;
                }
            });
        }
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
    urgencyLabel.innerText = 'Priority';
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
    saveButton.classList.add('button')
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

        console.log(projects)

        renderTodos(projects, parseFloat(currentTitle.dataset.id));
    })

    setTimeout(() => {
        newCard.classList.remove('hidden');
        newCard.classList.add('todoCard')
    }, 10);

    mainGrid.append(newCard);
}
