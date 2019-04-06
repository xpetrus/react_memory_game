import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header className = "header">
    <h1>Test Your Memory</h1>
    <h2>Click on an image to earn points. Don't click on the same image more than once!</h2>
    </header>
  );
}

export default Header;
