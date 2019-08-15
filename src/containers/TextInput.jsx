import React, { Component } from "react";
import "./TextInput.css";
import store from "../store";
import { setTypingValue, sendMessage } from "../action";
export class TextInput extends Component {
  handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    const { activeUserId, textInput } = store.getState();
    store.dispatch(sendMessage(textInput, activeUserId));
  };
  render() {
    const state = store.getState();
    const value = state.textInput;

    return (
      <form className="TextInput" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={value}
          className="InputText"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TextInput;
