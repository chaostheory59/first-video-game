import React from "react";
import "./cards.css";

function Card(props) {
  return (
    <div onClick={() => props.addStats(props.id)} className="card">
      <div className="img-container">
        <img className="remove" />
      </div>
      <div className="content">
        <p>{props.name}</p>
        <p>{props.text}</p>
        <ul>
          <li>
            <strong>Army:{props.army}</strong>
          </li>
          <li>
            <strong>Eng:{props.engineers}</strong>
          </li>
          <li>
            <strong>Civ:{props.civ}</strong>
          </li>
          <li>
            <strong>Wall Strength:{props.ws}</strong>
          </li>
          <li>
            <strong>Enemy Strength:{props.es}</strong>
          </li>
          <li>
            <strong>Cost:{props.gold}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;