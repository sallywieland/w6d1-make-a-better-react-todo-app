import React, { Component } from 'react'
import TodoItem from './TodoItem' // grabs TodoItem.js file --> stuff we wrote

// const Todos = (props) => { // <-- stateless component we used in previous assignment.

class Todos extends Component { // Component is imported from React (import React, { Component } from 'react')
    constructor(props) { // sticks memory inside of the constructor function (current state)
        super(props) // connects to parent (Component)
        this.typing = this.typing.bind(this) // everytime we make a new method, in order for that method to use 'this.' we must use the .bind() method!
        this.enter = this.enter.bind(this) // think of methods as functions
        this.markDone = this.markDone.bind(this)
        this.click = this.click.bind(this)
        this.markRemove = this.markRemove.bind(this)
        this.state = { // put all the variables that this component knows about itself inside the state object (metadata).
            newTodo: '', // a new todo item (when you type something in/input item)
            todos: [] // list/array of todos that have been added
        } // have to give items a place to put themselves (ie - empty string, empty array)
    }

    typing(e) { // an event
        this.setState({ // tells react to set a new state of the value
            newTodo: e.target.value // must be within a curly bracket object NOT this.state.newTodo = e.target.value
            // e.target.value --> updates a newTodo and can transform it (i.e. toUpperCase())
            // every time we set a this.setState() React automatically runs render()
            // React takes care of merging
        })

    }
    click(e) {
        var capitalizeOne = e.target.value.split(' ') // seperates string by spaces between words.
        var capitalizeTwo = capitalizeOne.map(function(words) { // .map() turns each item found in string into an item for a newly created array.
            return words.charAt().toUpperCase() + words.slice(1) // makes first letter of each item in array uppercase, but not the letters starting past 0.
        })
        var capitalizeThree = capitalizeTwo.join(' ') // recreates string.
        let updatedTodos = this.state.todos // copies todos array within the state object (can't modify state directly)
            updatedTodos.push({ // we are only mutating updatedTodos var, not this.state
                // 1. make copy of this.state value/property
                // 2. mutate the copy
                // this.setState({value:copy})
                text: capitalizeThree, // what is inputted in text box
                done: false // will tell us when the item is done/checked off
            }) // now need to add .text to TodoItem.js --> {props.data.item}
            this.setState({ // only way we can update state with a new value (see updatedTodos above)
                todos: updatedTodos,
                newTodo: '' // deletes text in input text after you click button/hit enter key.
                // when you are mutating values, you need to make a copy, but when you aren't you don't need to make a copy --> why we can use newTodo: ''
            })
        }
    enter(e) {
        if (e.key === 'Enter') { // if 'enter' key is pressed run the click method.
            this.click(e)
        }
    }
    markDone(currentTodoIndex) {
        let updatedTodos = this.state.todos // updates/makes copy of this.state object
        // updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done
            // changing the done property on the object
            // lets you toggle back and forth from a true and false value --> first time you go through, it's false
        if (updatedTodos[currentTodoIndex].done === false) { // another way of doing the .done line above
            updatedTodos[currentTodoIndex].done = true
        }
        else {
            updatedTodos[currentTodoIndex].done = false
        }
        this.setState({
            todos: updatedTodos // marking the todo we are checking off as done.
            // replaces with our new statement, and then it renders.
        })
    }
    markRemove(currentTodoIndex) {
        let updatedTodos = this.state.todos.splice(currentTodoIndex) // updates/makes copy of this.state object
        this.setState({
            todos: updatedTodos,
            todos: [] // clears out remaining to-do items on the todos array.
        })
    }

    // first loop around, it passes the methods above because they haven't been called yet.
    render() { // HAVE to have a render() method --> makes it a component.
        const TodoItems = this.state.todos.map((item, i) => { // needs this.props.todos.map() because of its state
            // 'item' data-type = object, 'i' data-type = index number within todos array.
            return <TodoItem data={item} key={i} markDone={() => this.markDone(i)} markRemove={() => this.markRemove(i)}/> // this.markDone connects to the markDone method above --> basically calls a function that runs a function
            // in react, every component is capable of rendering itself
                // key = keeps track of what's on screen (internal, need to do)
        }) // first pass through, .map will loop through zero times because the todos array is empty.

        return ( // MUST return JSX code
            <div>
            <div className="input-group">
            <input value={this.state.newTodo} onChange={this.typing} type="text" className="text_bar form-control" placeholder="What I Need To Do..." onKeyPress={this.enter} />
            <span className="input-group-btn">
              <button id="addButton" className="text_button btn btn-default glyph_hover" type="button" onClick={this.click} value={this.state.newTodo} onChange={this.typing}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
            </span>
            </div>
                {TodoItems}
            </div>
        )
        // value={this.state.newTodo} --> looks for each letter you type in
        // onChange={this.typing} --> when anything changes, runs typing() method
        // onKeyPress={this.enter} --> when enter key is pressed, runs enter() method
        // onClick={this.click} --> when button is clicked, runs click() method
    }
} // constructor() is basically boiler plate

// React is One-Way data
    // 1. Keypress --> should show char in input
    // 2. Goes to react
    // 3. Updates state
    // 4. triggers render()
    // 5. our tags will use this.state.newTodo

export default Todos
