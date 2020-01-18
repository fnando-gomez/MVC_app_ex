
class Model {
    constructor(){
    //The state of the model, array of to-do objects, prepopulated with some data
     this.todos = [
        {id: 1, text:"Go to the GYM", complete: false},
        {id: 2, text:"Go to Luli's birthday", complete: false}
        ]
        console.log(this.todos)
    }

    addTodo(todoText){
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,  
        }
        this.todos.push(todo)
    }

    //Map through all todos and replace the text of the todo with specified id | IOW --> Edit the "todo"
    editTodo(id, updatedText){
        this.todos = this.todos.map(todo =>
        todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo
        )
    }

    //Filter a todo out of the array bi id
    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    //Flip the complete boolean on the specific todo
    toggleTodo(id){
        this.todos = this.todos.map(todo =>
        todo.id === id ? {id: todo.id, text: todo.text,  complete: !todo.complete} : todo
        )
    }

}

class View {
    constructor(){}
}

class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(),new View())



