import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Wrapper(props) {
  return(
    <main className = "wrapper" {...props}/>
  );
}

export default Wrapper;
