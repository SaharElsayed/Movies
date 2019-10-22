import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import Logo from './../../components/logo/Logo';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import List from '../../components/list/List';
import './SideMenue.scss';
import { fetchDiscoverMoviesRequest, fetchSideListRequest, fetchActiveTab } from '../../redux/actions/index';

class SideMenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: 1, name: "Popular", api: 'popular', icon: faHeart },
        { id: 2, name: "Top rated", api: 'top_rated', icon: faChartLine },
        { id: 3, name: "Upcoming", api: 'upcoming', icon: faTable }
      ]
    }
  };

  componentDidMount() {
    this.props.fetchSideListRequest();
  }

  handleClick = (id, name, api) => {
    console.log(id);
    console.log(name);
    console.log(api);

    this.props.fetchActiveTab({ activeLink: id, pageTitle: name });
    this.props.fetchDiscoverMoviesRequest(id, api);
  };

  render() {
    const { links } = this.state;
    const { sideMenue, activeTab: { activeLink } } = this.props;

    return (
      <React.Fragment>
        <div className='side-menu'>
          <Logo />
          <List title='discover' links={links} handleClick={this.handleClick} activeLink={activeLink} />
          <List title='geners' links={sideMenue} handleClick={this.handleClick} activeLink={activeLink} />

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
  return { ...state };
}

export default connect(mapStateToprops, { fetchDiscoverMoviesRequest, fetchSideListRequest, fetchActiveTab })(SideMenue);