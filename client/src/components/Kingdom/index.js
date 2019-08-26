import React from "react";
import "./kingdom.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="kingdomName">
                <p>Kingdom Name: </p>
            </div>
            <div className="content">
                <ul className="stats">
                    <li className="one">
                        <strong>Army:{props.army}</strong>
                    </li>
                    <li className="two">
                        <strong>Engineers:{props.engineers}</strong>
                    </li>
                </ul>
                <ul className="stats">

                </ul>
                <ul className="stats">
                    <li className="three">
                        <strong>Civilians:{props.civ}</strong>
                    </li>
                </ul>
                <ul className="stats">
                    <li className="four">
                        <strong>Money:{props.gold}</strong>
                    </li>
                </ul>
                <ul className="stats">
                    <li className="five">
                        <strong>Wall Strength:{props.ws}</strong>
                    </li>
                </ul>
            </div >
        </div >
    );
}
export default Jumbotron;