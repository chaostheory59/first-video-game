import React from "react";
import "./title.css";
function Jumbotron({ children }) {
    return (
        <div className="title jumbotron">
            <h1>{children}</h1>
        </div>
    );
}
export default Jumbotron;