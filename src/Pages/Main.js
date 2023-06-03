import React from "react";
import { Link } from "react-router-dom";
import Profile from '../Data/Profile.json';
import "../Scss/global.scss"

function Main() {
  return (
    <div className="mainWrapper">
      <div className="mainBox">
        <h3 className="firstname">Firstname : {Profile.firstname}</h3>
        <h3 className="lastname">Lastname : {Profile.lastname}</h3>
        <Link to="/" className="logout Btn">
          Logout
        </Link>
      </div>
    </div>

  );
}

export default Main;
