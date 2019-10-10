import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import Logo from './../../components/logo/Logo';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons'

import List from '../../components/list/List';
import './SideMenue.scss';

class SideMenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: 1, name: "Popular", className: "list__item", icon: faHeart },
        { id: 2, name: "Top rated", className: "list__item", icon: faChartLine },
        { id: 3, name: "Upcoming", className: "list__item", icon: faTable }
      ],
      activeLink: 1
    }
  };

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  render() {
    const { links, activeLink } = this.state;
    return (
      <React.Fragment>
        <div className='side-menu'>
          <Logo />
          <List title='discover' links={links} handleClick={this.handleClick} activeLink={activeLink} />

        </div>

        {/* <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </Menu> */}
      </React.Fragment>
    )
  }
}

export default SideMenue;