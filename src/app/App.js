import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';
import history from './history'
import { Container, Row, Col } from 'react-bootstrap';
import SideMenue from './../containers/sideMenue/SideMenue';
import Search from './../components/search/Search';
import { connect } from 'react-redux';
import Loader from './../components/loader/Loader';
import './App.scss';

class App extends React.Component {

  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <Container fluid>
          <Search />
          <Row id="App">
            <Col lg='2' md='2' className="pr-md-0 pl-md-0">
              <SideMenue pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </Col>
            <Col id="page-wrap" lg='10' md='10' className="pt-md-60 pr-md-40 pb-md-60 pl-md-40">
              {loading ? <Loader /> : null}
              <div className={`${loading ? 'd-none' : ''}`}>
                <Router history={history}>{Routes}</Router>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );

  }
}

const mapStateToProps = ({ loader }) => {
  return loader
}
export default connect(mapStateToProps)(App);