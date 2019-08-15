import React from "react";
import "./SideBar.css";
import User from "../containers/User";
const SideBar = ({ contacts }) => {
  return (
    <aside className="SideBar">
      {contacts.map(contact => (
        <User key={contact.user_id} user={contact} />
      ))}
    </aside>
  );
};

export default SideBar;
