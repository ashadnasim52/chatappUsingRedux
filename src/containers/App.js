import React from "react";
import "./App.css";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import store from "../store";
import _ from "lodash";

function App() {
  const state = store.getState();
  const { contacts, activeUserId, user } = state;
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main
        activeUserId={activeUserId}
        contacts={_.values(contacts)}
        user={user}
      />
    </div>
  );
}

export default App;
