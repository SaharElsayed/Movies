import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';
import history from './history'
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import SideMenue from './../containers/sideMenue/SideMenue';
import Search from './../components/search/Search';
import './App.scss';

class App extends React.Component {

  componentDidUpdate() {
    this.setTabName()
  }

  setTabName = () => {
    const { activeTab: { title }, singleMovie: { movie }, artist } = this.props;
    const path = history.location.pathname;
    switch (true) {
      case path.includes('/movie/'):
        document.title = `${movie.original_title} - Movie Library`;
        break;
      case path.includes('/artist/'):
        document.title = `${artist.name} - Movie Library`;
        break;
      default:
        document.title = `${title}` ? `${title} Movies` : `Movie Library`;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Container fluid>
            <Search />
            <Row>
              <Col lg='2' md='2' className="pr-md-0 pl-md-0">
                <SideMenue />
              </Col>
              <Col lg='10' md='10' className="pt-md-60 pr-md-40 pb-md-60 pl-md-40">
                {Routes}
              </Col>
            </Row>
          </Container>
        </Router>
      </React.Fragment>
    );

  }
}
const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps)(App);