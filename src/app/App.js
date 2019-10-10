
import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';
import history from './history'
import { Container, Row, Col } from 'react-bootstrap';

import SideMenue from './../containers/sideMenue/SideMenue';
import Search from './../components/search/Search';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Container fluid>
            <Search />
            <Row>
              <Col lg='2' className="pr-md-0 pl-md-0">
                <SideMenue />
              </Col>
              <Col lg='10' className="pt-md-60 pr-md-40 pb-md-60 pl-md-40">
                {Routes}
              </Col>
            </Row>
          </Container>
        </Router>
      </React.Fragment>
    );

  }
}

export default App;