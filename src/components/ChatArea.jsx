import React, { Component } from "react";
import Chat from "./Chat";
import "./ChatArea.css";
export class ChatArea extends Component {
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  chatsRef = React.createRef();

  render() {
    return (
      <div className="ChatArea" ref={this.chatsRef}>
        {this.props.chats.map(chat => (
          <Chat key={chat.number} chat={chat} />
        ))}
      </div>
    );
  }
}

export default ChatArea;
