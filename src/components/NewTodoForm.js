import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewTodoForm extends Component {
    state = {
        newTodo: "",
    };

    handleChange = (event) => {
        this.setState({ newTodo: event.target.value })
        // console.log("the input has changed");
      };
      
    handleSubmit = (event) => {
        event.preventDefault(); 
        // console.log("submitting new to-do")
        const newTodoObject = {
          id: this.props.todos.length + 1, 
          completed: false, 
          text: this.state.newTodo,
        };

        this.props.addNewTodo(newTodoObject)
      
        // const newTodosState = this.state.todos.concat(newTodoObject)
        // // const newTodosState = [...this.state.todos, newTodoObject];
        // this.setState({
        //     todos: newTodosState,
        //     newTodo: "", 
        //   });
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange} 
                value={this.state.newTodo}
                type="text" 
                placeholder="Enter new to-do here..."
                />
                <p>{20 - this.state.newTodo.length} characters left</p>
                <button type="submit">Create new to-do</button>
                </form>
            </div>
        );
    }
}
