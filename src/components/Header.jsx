import React from "react";
import "./Header.css";
const Header = ({ activeUser }) => {
  const { name, status, profile_pic } = activeUser;
  return (
    <nav className="Header">
      <img src={profile_pic} alt={name} />
      <div className="Details">
        <div className="Name">{name}</div>
        <div className="Status">{status}</div>
      </div>
    </nav>
  );
};

export default Header;
