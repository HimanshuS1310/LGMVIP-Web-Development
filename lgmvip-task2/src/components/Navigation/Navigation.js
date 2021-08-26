import React from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.css";

const Navigation = ({ onButtonSubmit }) => {
  return (
    //used to provide the button funtionality and displays the logo
    <nav className="navbar">
      <h4 className="logo">My Clients</h4>
      <div className="nav-links">
        <Button variant="contained" onClick={onButtonSubmit} color="orange">
          Get Users
        </Button>
      </div>
    </nav>
  );
};

//{onRouteChange, isSignedIn}
export default Navigation;
