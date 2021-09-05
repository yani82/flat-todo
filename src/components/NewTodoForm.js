import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewTodoForm extends Component {
    state = {
        newTodo: "",
        dueDate: "",
        assignee: "",
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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

        this.props.addNewTodo(newTodoObject);
        this.setState({
            newTodo: "", 
        });
        // const newTodosState = this.state.todos.concat(newTodoObject)
        // // const newTodosState = [...this.state.todos, newTodoObject];
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange} 
                value={this.state.newTodo}
                name="newTodo"
                type="text" 
                placeholder="Enter new to-do here..."
                />
                <br></br>
                {/* <input 
                onChange={this.handleChange} 
                value={this.state.dueDate}
                name="dueDate"
                type="text" 
                placeholder="Enter new to-do here..."
                />
                <br></br>
                <input 
                onChange={this.handleChange} 
                value={this.state.assignee}
                name="assignee"
                type="text" 
                placeholder="Enter new to-do here..."
                />
                <br></br> */}
                <p>{20 - this.state.newTodo.length} characters left</p>
                <button type="submit">Create new to-do</button>
                </form>
            </div>
        );
    }
}
