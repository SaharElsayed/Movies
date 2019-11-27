import React, { Suspense } from 'react';
import { Col } from 'react-bootstrap';
import SideMenue from '../sideMenue/SideMenue';
import Loader from '../../components/loader/Loader';
import Search from './../../components/search/Search';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    console.log(this.props);

    const { isMobile } = this.props;
    return (
      <Col xl='2' lg='12' className={`pr-md-0 pl-md-0 ${isMobile ? 'custom-navbar--mobile' : ''}`}>
        {isMobile &&
            <Search />
        }
        <SideMenue isMobile={isMobile} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </Col>
    )
  }
}

export default NavBar;