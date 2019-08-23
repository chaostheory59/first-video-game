import React from "react";
import "./cards.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => props.count(props.id)} className="remove" />
      </div>
      <div className="content">
          <h1>{props.text}</h1>
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
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;