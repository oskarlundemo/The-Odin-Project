


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";
import {Todo} from "./todo.js";


document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();

    projects.addProject("Skola");
    const skolis = new Todo("Plugga", "Läsa minst två kapitel i ekonomistyrning",
        "2022-01-15", 3);

    projects.projectData[0].addTodo(skolis);

    console.log(skolis);
    console.log(projects.projectData[0].todos[0].id)

    projects.projectData[0].todos[0].title = "Dansa";

    console.log(skolis);




    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        const checkForProject = document.getElementById("projects")
        const currentProject = document.getElementById('projectTitle');

        if (checkForProject.querySelector("li") && currentProject.textContent !== '') {
            createTodoElement(projects);
        }
        else {
            alert('Please create and select an project first');
        }
    })


    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement(projects);
    })
})