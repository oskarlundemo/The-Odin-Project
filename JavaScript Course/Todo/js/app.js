


import {createTodoElement} from './dom.js';


document.addEventListener("DOMContentLoaded", () => {


    const addTodoButton = document.getElementById("addTodoBtn").addEventListener("click", () => {
        createTodoElement();
    })
})