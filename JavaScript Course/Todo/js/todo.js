

export { TodoList, Todo };


class Todo {

    constructor (title, description, dueDate, priority) {
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

    editTodoListName (name) {
        this.description = name;
    }

    addTodo (newTodo) {
        this.todos.push(newTodo);
    }

    editTodo (id, newTitle, newDescription, newDueDate, newPriority, newCompleted) {
        const changedTodo = this.todos.find(todo => todo.id === id);

        if (changedTodo) {
            changedTodo.title = newTitle;
            changedTodo.description = newDescription;
            changedTodo.dueDate = newDueDate;
            changedTodo.priority = newPriority;
            changedTodo.completed = newCompleted;
        }
    }

    deleteTodo (id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }


    getToodos () {
        return this.todos;
    }
}