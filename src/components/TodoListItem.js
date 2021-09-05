import React from 'react'

export default function TodoListItem(props) {
    return (
        <div 
        onClick={() => props.completeTodo(props.todo.id)} 
        style={{ textDecoration: props.todo.completed ? 
        "line-through" : "" }}
        >
            {props.todo.text}
        </div>
    );
}
