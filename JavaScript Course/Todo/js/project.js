




export class Project {

    constructor(listOfTodos = [], description) {
        this.listOfTodos = listOfTodos;
        this.description = description;
        this.nextID = 1;
    }

    addProject (listOfTodos, description) {
        const newProject = new Project(this.nextID++, this.description = description, listOfTodos);
        return newProject;
    }

    deleteProject (id) {
        this.listOfTodos = this.listOfTodos.filter(project => project.id!== id);
    }

}