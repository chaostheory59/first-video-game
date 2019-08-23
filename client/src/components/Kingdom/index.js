import React from "react";
import "./kingdom.css";
function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            <div className="kingdomName">
                <p>Kingdom Name: </p>
            </div>
            <div className="content">
                <ul className="stats">
                    <li className="one">
                        <strong>Army:{children}</strong>
                    </li>
                    <li className="two">
                        <strong>Engineers:{children}</strong>
                    </li>
                </ul>
                <ul className="stats">
                    
                </ul>
                <ul className="stats">
                    <li className="three">
                        <strong>Civilians:{children}</strong>
                    </li>
                </ul>
                <ul className="stats">
                    <li className="four">
                        <strong>Money:{children}</strong>
                    </li>
                </ul>
                <ul className="stats">
                    <li className="five">
                        <strong>Wall Strength:{children}</strong>
                    </li>
                </ul>
            </div >
        </div >
    );
}
export default Jumbotron;