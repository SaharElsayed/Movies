import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';
import history from './history'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './../containers/navBar/NavBar';
import SearchBar from './../components/searchBar/SearchBar';
import { connect } from 'react-redux';
import Loader from './../components/loader/Loader';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: null }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    window.matchMedia("(max-width: 1024px)").matches
      ? this.setState({ isMobile: true })
      : this.setState({ isMobile: false });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { loading } = this.props;
    const { isMobile } = this.state;
    return (
      <React.Fragment>
        <Container fluid>
          {!isMobile && <SearchBar />}
          <Row id="App">
            <NavBar isMobile={isMobile} />
            <Col id="page-wrap" xl='10' lg='12' className={`pt-md-60 pr-md-40 pb-md-60 pl-md-40 ${isMobile ? 'mt-md-40 mt-xs-100' : ''}`}>
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