
class Model {
    constructor(){
    //The state of the model, array of to-do objects, prepopulated with some data
     this.todos = [
        {id: 1, text:"Go to the GYM", complete: false},
        {id: 2, text:"Go to Luli's birthday", complete: false}
        ]
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
    constructor(){

        //The root element
        this.app = this.getElement('#root')

        //The title of the app
        this.title = this.createElement('h1')
        this.title.textContent = "To-dos"

        //The form, with a [type="text"] input, and a submit button
        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add some task to-do'
        this.input.name = 'to-do'

        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'

        //The visual representation of the to-do list
        this.todoList = this.createElement('ul', 'todo-list')

        //Append the input and submit button to the form
        this.form.append(this.input, this.submitButton)

        //Append the title, form and to-do list to the app
        this.app.append(this.title, this.form, this.todoList)
    }

    get _todoText(){
        return this.input.value
    }

    _resetInput(){
        this.input.value = ''
    }

    //Create an element with an optional CSS class
    createElement(tag, className){
        const element = document.createElement(tag)
            if (className) element.classList.add(className)
            
            return element
    }

    //Retrieve an element from the DOM
    getElement(selector){
        const element = document.querySelector(selector)

        return element
    }

    displayTodos(todos){
        //Delete all nodes
        while(this.todoList.firstChild){
            this.todoList.removeChild(this.todoList.firstChild)
        }

        //Show default message
        if (todos.lenght === 0){
            const p = this.createElement('p')
            p.textContent = "Nothing to do! Great, or do you want to add a task?"
            this.todoList.append(p)
        } else{
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id

                //Each todo item will have a checkbox you can toogle
                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

                //The todo item text will be in a content editable span
                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                //If the todo is complete, it will have a strikethrough
                
            });
        }


    }



}

class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(),new View())




