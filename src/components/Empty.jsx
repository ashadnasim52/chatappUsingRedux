import React from "react";
import "./Empty.css";
const Empty = ({ user }) => {
  const { name, email, status, profile_pic } = user;
  return (
    <div className="Empty">
      <img className="image" src={profile_pic} alt={name} />
      <div className="Details">
        <span className="Name">{name}</span>
        <span className="Status">{status}</span>
        <span className="Email">{email}</span>
      </div>
    </div>
  );
};

export default Empty;
