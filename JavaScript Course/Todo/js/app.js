


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";
import {Todo} from "./todo.js";


document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();

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