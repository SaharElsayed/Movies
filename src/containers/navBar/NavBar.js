import React, { Suspense } from 'react';
import { Col } from 'react-bootstrap';
import SideMenue from '../sideMenue/SideMenue';
import Loader from '../../components/loader/Loader';
import SearchBar from './../../components/searchBar/SearchBar';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    const { isMobile } = this.props;
    return (
      <Col xl='2' lg='12' className={`pr-md-0 pl-md-0 ${isMobile ? 'custom-navbar--mobile' : ''}`}>
        {isMobile &&
          <SearchBar />
        }
        <SideMenue isMobile={isMobile} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </Col>
    )
  }
}

export default NavBar;