import React from "react";
import "./ChatArea.css";
import Chat from "./Chat";
const ChatArea = ({ chats }) => {
  return (
    <div className="ChatArea">
      {chats.map(chat => (
        <Chat key={chat.number} chat={chat} />
      ))}
    </div>
  );
};

export default ChatArea;
