import React from "react";
import "./Profile.css";

const profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <button onClick={toggleModal}>Click</button>
    </div>
  );
};

export default profile;
