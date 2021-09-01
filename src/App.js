import React, { Component } from 'react' 
import TodoListItem from "./components/TodoListItem";
import Header from "./components/Header";

class App extends React.Component {
state = {
  todos: [
    { id: 1, text: "Do React Labs", completed: false },
    { id: 2, text: "Watch React Lectures", completed: true },
  ],
  newTodo: ""
};

handleChange = (event) => {
  this.setState({ newTodo: event.target.value })
  // console.log("the input has changed");
};

handleSubmit = (event) => {
  event.preventDefault(); 
  console.log("submitting new to-do")
  const newTodoObject = {
    id: this.state.todos.length + 1, 
    completed: false, 
    text: this.state.newTodo,
  };

  const newTodosState = this.state.todos.concat(newTodoObject)
  // const newTodosState = [...this.state.todos, newTodoObject];
  this.setState({
      todos: newTodosState,
      newTodo: "", 
    });
};

  render() {
    const todoElements = this.state.todos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ));
    return (
    <div>
      <Header />
      <form onSubmit={this.handleSubmit}>
        <input 
        onChange={this.handleChange} 
        value={this.state.newTodo}
        type="text" 
        placeholder="Enter new to-do here..."
        />
        <button type="submit">Create new to-do</button>
      </form>
      {todoElements}
      </div>
    );
  }
}

export default App;
