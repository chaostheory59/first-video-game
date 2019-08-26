import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import HighScore from "./pages/HighScore";
import Log_in from "./pages/Log_ing";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Log_in} />
          <Route exact path="/books" component={Game} />
          <Route exact path="/books/:id" component={HighScore} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;