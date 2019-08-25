import React from "react";
import "./login.css";
function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            <div className="gameTitle">
                <strong>Defense of Tor-Kurdin</strong>
            </div>
            <div className="content">
                <ul className="login">
                    <li className="username">
                        <input type="account" class="form-control" id="input-name-create" placeholder="Username"></input>
                    </li>
                    <li className="password">
                    <input type="email" class="form-control" id="input-password-create" placeholder="Password"></input>
                    </li>
                </ul>
                <ul className="Story">
                <li className="background-story">
                <strong>Intro:</strong>
                <p>Player will be tasked of defending the great city of Alabast from the marauding hordes led by the dark lord Kazadurr. You only have a limited number of troops, engineers, civilians, and gold to last as long as possible. </p>
                <strong>Army:</strong>
                <p>the one thing defending your city from the hordes. They will man the walls and protect the city at all costs.</p>
                <strong>Engineers:</strong>
                <p>engineers allow you at the end of each day to repair your walls and get its strength back up to 100%</p>
                <strong>Civilians:</strong>
                <p>there is a set number of civilians in your city. They are the source of your income and are allowed to be trained as either troops for your army or as engineers.</p>
                <strong>Gold:</strong>
                <p>this is used to buy either engineers or troops for your Army</p>
                <strong>Wall Strength:</strong>
                <p>wall strength add a defensive bonus to your army. If your walls reach zero your army will not last long at all.</p>
                </li>
                </ul>
                <ul className = "instructions">
                    <li className="Instruc">
                        <p>At the start of the game, you will be given a set number of units, civilians, engineers, and gold. Your wall strength will start at full health. Every turn you are given 3 random cards that you can purchase that can help you in your future battle. You can only pick one per turn. Some may be too expensive to buy. Once you click end turn the enemy will attack you. Depending on your wall strength you will lose troops. After the attack, your engineers will repair the wall depending on how many you have. You will also gain income from your civilians. On certain days there is a chance of getting a random event that can benefit or harm you drastically. You must keep your army and wall strength as high as possible because if you end up having zero troops, you will lose the city to the enemy. This is a survival game and you must try to last as long as possible. When you lose, it will tally up the points you have and put you into a ranking system. </p>
                    </li>
                </ul>
            </div >
        </div >
    );
}
export default Jumbotron;