import React from "react";
import "./Chat.css";
const Chat = ({ chat }) => {
  return (
    <span className={chat.is_user_msg === true ? "Chat ChatUser" : "Chat"}>
      {chat.text}
    </span>
  );
};

export default Chat;
