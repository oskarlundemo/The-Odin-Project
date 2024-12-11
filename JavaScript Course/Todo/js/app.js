


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";

document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();


    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        const checkForProject = document.getElementById("projects")
        const currentProject = document.getElementById('projectTitle');
        const projectSettings = document.getElementById('projectSettings')

        if (checkForProject.querySelector("li") && currentProject.textContent !== '') {
            createTodoElement(projects);
            projectSettings.classList.remove('hidden')
        }
        else {
            alert('Please create and select an project first');
        }
    })


    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement(projects);
    })
})