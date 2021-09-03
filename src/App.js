import React, { Component } from "react";
import TodoListItem from "./components/TodoListItem";
import NewTodoForm from "./components/NewTodoForm";
import Header from "./components/Header";

class App extends React.Component {
state = {
  todos: [
    { id: 1, text: "Do React Labs", completed: false },
    { id: 2, text: "Watch React Lectures", completed: true },
  ],
};

addNewTodo = (newTodoObject) => {
  const newTodosState = this.state.todos.concat(newTodoObject);
//   // const newTodosState = [...this.state.todos, newTodoObject];
  this.setState({
      todos: newTodosState,
    });
};

// handleSubmit = (event) => {
//   event.preventDefault(); 
//   console.log("submitting new to-do");
//   const newTodoObject = {
//     id: this.state.todos.length + 1, 
//     completed: false, 
//     text: this.state.newTodo,
//   };
// };

  render() {
    const todoElements = this.state.todos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    return (
    <div>
      <Header todos={this.state.todos} />
      <NewTodoForm todos={this.state.todos} addNewTodo={this.addNewTodo} />
      {todoElements}
      </div>
    );
  }
}

export default App;
