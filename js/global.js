import React from 'react' // comes from the node_modules
import ReactDOM from 'react-dom'
import Todos from '../components/Todos' // is coming from the files/components we created

// REACT CODE -->
window.renderView = function() {
    ReactDOM.render( // kicks off the react render() process
        <Todos />, // takes two arguments: component
         document.getElementById('todos')) // second argument: the ID from HTML (where you're going to put it)
         // won't use DOM methods anywhere else in our React code --> only where we hook it to the HTML file
}

renderView()
