


import {createTodoElement, createProjectElement } from './dom.js';
import {Project} from "./project.js";
import {Todo, TodoList} from "./todo.js";


document.addEventListener("DOMContentLoaded", () => {

    const projects = new Project();

    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        createTodoElement(projects);
    })


    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement(projects);
    })
})