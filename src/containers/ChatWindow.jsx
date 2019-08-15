import React from "react";
import "./ChatWindow.css";
import Header from "../components/Header";
import ChatArea from "../components/ChatArea";
import store from "../store/";
import _ from "lodash";
import TextInput from "./TextInput";
const ChatWindow = () => {
  const { activeUserId, contacts, messages } = store.getState();
  const activeMessage = messages[activeUserId];
  const activeUser = contacts[activeUserId];
  return (
    <div className="ChatWindow">
      <Header activeUser={activeUser} />
      <ChatArea chats={_.values(activeMessage)} />
      <TextInput value={"asd"} />
    </div>
  );
};

export default ChatWindow;
