import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import HighScore from "./pages/HighScore";
import Log_in from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Log_in} />
          <Route exact path="/users" component={Game} />
          <Route exact path="/users/:id" component={HighScore} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;