import React from 'react';
import SideMenue from '../sideMenue/SideMenue';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    const { isMobile } = this.props;
    return (
      <SideMenue isMobile={isMobile} pageWrapId={"page-wrap"} outerContainerId={"App"} />
    )
  }
}

export default NavBar;