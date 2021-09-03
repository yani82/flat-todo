import React from "react";

export default function Header(props) {
    return (
        <div>
            <h1>To-do List: {props.todos.length}</h1>
        </div>
    );
}
