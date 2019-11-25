import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  // you will need a place to store your state in
  //this component.
  // design `App` to be the parent component of
  //your application.
  // this component is going to take care of state,
  //and any change handlers you need to work with
  //your state
  constructor() {
    super();
  }
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
