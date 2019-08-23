import React from "react";
import "./title.css";
function Jumbotron({ children }) {
    return (
        <div className="title jumbotron">
            {children}
        </div>
    );
}
export default Jumbotron;