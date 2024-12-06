


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";
import {TodoList} from "./todo.js";


document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();
    projects.addProject("Miscellaneous");

    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        createTodoElement(projects);
    })


    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement(projects);
        console.log(projects);
    })
})