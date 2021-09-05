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
  // Here is where we would make an API call to persist the new todo object
  const newTodosState = this.state.todos.concat(newTodoObject);
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
    const activeTodos = this.state.todos.filter(function(todo){
      return !todo.completed 
    })
    const completedTodos = this.state.todos.filter(function(todo)
    {
      return todo.completed 
    })
    const activeTodoElements = activeTodos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    const completedTodoElements = completedTodos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    return (
    <div>
      <Header todos={this.state.todos} />
      <NewTodoForm todos={this.state.todos} addNewTodo={this.addNewTodo} />
      <hr />
      <h1>Active Todos</h1>
      {activeTodoElements}
      <h1>Completed Todos</h1>
      {completedTodoElements}
      </div>
    );
  }
}

export default App;
