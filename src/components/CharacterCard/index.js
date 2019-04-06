import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    //JSX onClick event attribute
    <div className="card" onClick={() => props.clickCheck(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={require("../../images/"+props.image)} />
      </div>

    </div>
  );
}

export default CharacterCard;
