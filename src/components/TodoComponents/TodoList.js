import React from "react";
import TodoForm from "../TodoComponents/TodoForm";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState({
      todos: { todo, ...this.state.todo }
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSumit={this.addTodo} />;
      </div>
    );
  }
}
