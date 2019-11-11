import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';
import history from './history'
import { Container, Row, Col } from 'react-bootstrap';
import SideMenue from './../containers/sideMenue/SideMenue';
import Search from './../components/search/Search';
import './App.scss';
import { connect } from 'react-redux';
import Loader from './../components/loader/Loader';

class App extends React.Component {

  render() {
    const { loading } = this.props;
    console.log(loading);
    
    return (
      <React.Fragment>
        <Container fluid>
          <Search />
          <Row>
            <Col lg='2' md='2' className="pr-md-0 pl-md-0">
              <SideMenue />
            </Col>
            <Col lg='10' md='10' className="pt-md-60 pr-md-40 pb-md-60 pl-md-40">
              {loading ? <Loader /> : null}
              <Router history={history}>{Routes}</Router>
            </Col>
          </Row>
        </Container>
        {/* </Router> */}
      </React.Fragment>
    );

  }
}

const mapStateToProps = ({ loader }) => {
  return loader
}
export default connect(mapStateToProps)(App);