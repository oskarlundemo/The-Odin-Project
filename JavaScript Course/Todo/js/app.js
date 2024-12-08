


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";


document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();

    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {

        const checkForProject = document.getElementById("projects")

        if (checkForProject.querySelector("li")) {
            createTodoElement(projects);
        }
        else {
            alert('Please create a project first');
        }
    })


    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement(projects);
    })
})