import React from 'react'

export default function TodoListItem(props) {
    return (
        <div 
        onClick={() => props.toggleTodo(props.todo.id)} 
        style={{ textDecoration: props.todo.completed ? 
        "line-through" : "" }}
        >
            {props.todo.text}
        </div>
    );
}
