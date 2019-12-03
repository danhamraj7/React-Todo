import React from "react";
import TodoForm from "../TodoComponents/TodoForm";
import Todo from "../TodoComponents/Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all"
  };
  //add to list
  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = show => {
    this.setState({
      todoToShow: show
    });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div className="todoLeft">
          todos left:{this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div className="buttonDiv">
          <button className="all" onClick={() => this.updateTodoToShow("all")}>
            All
          </button>
          <button
            className="active"
            onClick={() => this.updateTodoToShow("active")}
          >
            Active
          </button>
          <button
            className="completed"
            onClick={() => this.updateTodoToShow("complete")}
          >
            Complete
          </button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <button
              className="removeButton"
              onClick={this.removeAllTodosThatAreComplete}
            >
              Remove all completed todos
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
