import React, {Component } from "react";
import Jumbotron from "./components/Title";
import { Col, Row, Container } from "./components/Grid";
import Cards from "./components/Cards";
import Kingdom from "./components/Kingdom";
import cards from "./cards.json";


class App extends Component {

  state = {
    cards
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>Game</Jumbotron>
        <Row>
          <Container>
            <Row>
              <Col size="md-2">
                {this.state.frends.map(card => (
                  <Cards
                    army={card.army}
                    engineers={card.engineers}
                    civ={card.civ}
                    ws={card.WS}
                  />
                ))}
              </Col>
              <Col size="md-10">
                <Kingdom>
                  0
              </Kingdom>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default App;