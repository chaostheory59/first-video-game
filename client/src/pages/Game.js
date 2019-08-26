import React, { Component } from "react";
import Jumbotron from "./components/Title";
import { Col, Row, Container } from "./components/Grid";
import Cards from "./components/Cards";
import Kingdom from "./components/Kingdom";
import cards from "./cards.json";
import Start from "./components/Start";
import DayButton from "./components/DayButton";


class Game extends Component {

  state = {
    cards,
    gold: 2000,
    army: 500,
    civ: 2000,
    engineers: 300,
    WS: 100,
    ES: 100,
    day:1,
    newCards: []
  }

  three = cards => {
    let newCards = this.state.newCards;
    for (let i = 0; i < 3; i++) {
      let card = cards[Math.floor(Math.random() * cards.length)];
      newCards.push(card);
      this.setState({ newCards: this.state.newCards });
      console.log(newCards[i].army);
    }
    return true;
  }

  addStats = id => {
    this.state.cards.find((card, i) => {
      if (card.id === id) {
        this.setState({ army: this.state.army + cards[i].army });
        this.setState({ gold: this.state.gold + cards[i].gold });
        this.setState({ civ: this.state.civ + cards[i].civ });
        this.setState({ engineers: this.state.engineers + cards[i].engineers });
        this.setState({ WS: this.state.WS + cards[i].WS });
        this.setState({ newCards: [] });
        return true;
      }
    });
  }

  enemyAttack = () => {
    if (this.state.WS >= 100) {
      this.setState({ES:this.state.ES + 5});
      this.setState({gold: this.state.gold + (this.state.civ*(.10))});
      this.setState({ WS: this.state.WS + (this.state.engineers*.05) - (this.state.ES / 10) });
      this.setState({day: this.state.day +1});
      this.three(cards);
    } else {
      this.setState({ES:this.state.ES + 5});
      this.setState({gold: this.state.gold + (this.state.civ*(.10))});
      this.setState({ WS: this.state.WS + (this.state.engineers*.05) - (this.state.ES / 10) });
      this.setState({ army: this.state.army - ((this.state.ES) * (this.state.WS / 100)) })
      this.setState({day: this.state.day +1});
      this.three(cards);
    }
  };

  event = () => {

  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>Game</Jumbotron>
        <Row>
          <Container>
            <Row>
              <Col size="md-2">
                {this.state.newCards.map(card => (
                  <Cards
                    addStats={this.addStats}
                    name={card.name}
                    text={card.text}
                    army={card.army}
                    engineers={card.engineers}
                    civ={card.civ}
                    ws={card.WS}
                    es={card.ES}
                    gold={card.gold}
                    id={card.id}
                    key={card.id}
                  />
                ))}
              </Col>
              <Col size="md-10">
                <Kingdom
                  army={this.state.army}
                  engineers={this.state.engineers}
                  civ={this.state.civ}
                  gold={this.state.gold}
                  ws={this.state.WS}
                />
                <Start onClick={() => this.three(cards)} ></Start>
                <DayButton onClick={() => this.enemyAttack()}>End Day: {this.state.day}</DayButton>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Game;