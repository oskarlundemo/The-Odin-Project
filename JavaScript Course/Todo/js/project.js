import {TodoList} from "./todo.js";


export class Project {

    constructor () {
        this.projectData = [];
    }

    addProject (description) {
        const newProject = new TodoList(description);
        this.projectData.push(newProject);

        return newProject.id;
    }

    deleteProject (id) {
        this.projectData = this.projectData.filter(project => project.id!== id);
    }
}