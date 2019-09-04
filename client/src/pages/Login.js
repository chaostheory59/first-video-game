import React, { Component } from "react";
import Jumbotron from "../components/Title";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login";
import { Link } from "react-router-dom";


class Log_in extends Component {

  render() {
    return (
      <Container fluid>
        <Jumbotron>Defense of Tor-Kurdin</Jumbotron>
        <Row>
          <Container>
            <Row>
              <Col size="md-12">
                <Login></Login>
                <Link to={"/users"}>Click to Play ---></Link>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Log_in;