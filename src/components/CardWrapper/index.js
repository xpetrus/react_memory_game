import React from "react";
import "./style.css";

function CardWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CardWrapper;
