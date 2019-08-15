import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../action";
const User = ({ user }) => {
  const { name, profile_pic, status, user_id } = user;
  const handleClick = () => {
    store.dispatch(setActiveUserId(user_id));
  };
  return (
    <div className="User" onClick={handleClick}>
      <div className="User_Image">
        <img className="image" src={profile_pic} alt={name} />
      </div>
      <div className="User_Details">
        <div className="User_Details_Name">{name}</div>
        <div className="User_Details_Status">{status}</div>
      </div>
    </div>
  );
};

export default User;
