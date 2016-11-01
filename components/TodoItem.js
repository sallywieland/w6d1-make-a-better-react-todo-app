import React, { Component } from 'react'
// doesn't need another import because it has no children.

const TodoItem = (props) => ( // props data-type = object (name them props because they have properties on them)
    <div onClick={props.markDone} onDoubleClick={props.markRemove} className="todo_box todo_text" style={{backgroundColor:props.data.done?'#3626A7':''}}>
        <span className={props.data.done?'completed_todos':''}>{props.data.text}</span>
    </div>
)
// function contains the actual JSX / HTML code that will appear within the todos div.
// most specific information on this page --> the EXACT HTML code.
export default TodoItem
