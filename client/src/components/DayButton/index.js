import React from "react";
import "./DayButton.css";

function DayButton(props) {
    return (
        <div className="button">
            <h1 className="day" {...props}></h1>
        </div>
    );
}



export default DayButton;