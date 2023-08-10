import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to the Profile Page!</h2>
      <p>edit your profile.</p>
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  );
};

export default WelcomePage;
