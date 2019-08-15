import React from "react";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";
const Main = ({ activeUserId, user }) => {
  return (
    <main className="Main">
      {activeUserId === "" ? <Empty user={user} /> : <ChatWindow />}
    </main>
  );
};

export default Main;
