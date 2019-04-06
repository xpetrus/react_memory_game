import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light">

      
        <ul className="navbar-nav">
          <li className = "brand">
              <h4>React Memory Game</h4>
          </li>
          <li className="nav-item">
              <h4>Click an image to begin</h4>
          </li>
          <li className="nav-item">
              <h4>Score: {props.score} | Top Score: {props.highscore}</h4>
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
