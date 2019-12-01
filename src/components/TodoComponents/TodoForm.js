import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    //clears textbox
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          required
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button className="addTodos" onClick={this.handleSubmit}>
          Add Todos
        </button>
      </form>
    );
  }
}
