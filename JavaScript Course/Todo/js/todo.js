

export { TodoList };


class Todo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}



class TodoList {

    constructor () {
        this.todos = [];
        this.nextID = 1;
    }

    addTodo (text, priority) {
        const newTodo = new Todo(this.nextID++, text, priority)
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