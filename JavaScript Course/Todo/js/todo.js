

export { TodoList, Todo };


class Todo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Math.random();
    }
}



class TodoList {

    constructor (description) {
        this.todos = [];
        this.description = description;
        this.id = Math.random();
    }

    addTodo (newTodo) {
        this.todos.push(newTodo);
        return newTodo;
    }

    deleteTodo (id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    changePriority (id, newPriority) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) todo.priority = newPriority;
    }

    setComplete (id, completed = true) {
        const todo = this.todos.find(todo => todo.id === id);
        if(todo) todo.complete = completed;
    }

    getToodos () {
        return this.todos;
    }
}