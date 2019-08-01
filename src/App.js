import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
<div class="app">
  <div class="todo-container">
    <div class="todo-item-row">Learn React</div>
    <div class="todo-item-row">Learn Redux</div>
    <div class="todo-item-row">Learn React Native</div>
  </div>
</div>
*/

class App extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "app"
      },
      React.createElement(
        "div",
        {
          className: "todo-container"
        },
        React.createElement(
          "div",
          {
            className: "todo-item-row"
          },
          "Learn React"
        ),
        React.createElement(
          "div",
          {
            className: "todo-item-row"
          },
          "Learn Redux"
        ),
        React.createElement(
          "div",
          {
            className: "todo-item-row"
          },
          "Learn React Native"
        )
      )
    );
  }
}

export default App;
