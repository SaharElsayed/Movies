import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import Logo from './../../components/logo/Logo';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons'
import List from '../../components/list/List';
import './SideMenue.scss';
import { connect } from 'react-redux';
import { fetchListRequest } from '../../redux/actions/index';

class SideMenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: 1, name: "Popular", api: 'popular', className: "list__item", icon: faHeart },
        { id: 2, name: "Top rated", api: 'top_rated', className: "list__item", icon: faChartLine },
        { id: 3, name: "Upcoming", api: 'upcoming', className: "list__item", icon: faTable }
      ],
      activeLink: 1
    }
  };

  componentDidMount() {

  }

  handleClick = (id, category) => {
    // console.log(category);

    this.setState({ activeLink: id });
    this.props.fetchListRequest(category);
  };

  render() {
    const { links, activeLink } = this.state;
    return (
      <React.Fragment>
        <div className='side-menu'>
          <Logo />
          <List title='discover' links={links} handleClick={this.handleClick} activeLink={activeLink} />
          {/* <List title='geners' links={links} handleClick={this.handleClick} activeLink={activeLink} /> */}

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

const mapStateToprops = state => {
  // console.log(state);
  return { ...state.list };
}

export default connect(mapStateToprops, { fetchListRequest })(SideMenue);