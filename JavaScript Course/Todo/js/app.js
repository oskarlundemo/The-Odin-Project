


import {createTodoElement, createProjectElement } from './dom.js';


document.addEventListener("DOMContentLoaded", () => {


    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        createTodoElement();
    })

    const addNewProjectButton = document.getElementById("addProjectBtn").addEventListener("click", () => {"" +
        createProjectElement();
    })
})