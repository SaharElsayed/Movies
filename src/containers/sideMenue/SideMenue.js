import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import Logo from './../../components/logo/Logo';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import List from '../../components/list/List';
import './SideMenue.scss';
import { connect } from 'react-redux';
import { fetchListRequest, fetchGenresRequest, fetchActiveTab } from '../../redux/actions/index';

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
    this.props.fetchGenresRequest();
  }

  handleClick = (id, name, category) => {
    // console.log(category);

    this.props.fetchActiveTab({ activeLink: id, pageTitle: name });
    this.props.fetchListRequest(category);
  };

  render() {
    const { links } = this.state;
    const { genres, activeTab: { activeLink } } = this.props;

    return (
      <React.Fragment>
        <div className='side-menu'>
          <Logo />
          <List title='discover' links={links} handleClick={this.handleClick} activeLink={activeLink} />
          <List title='geners' links={genres} handleClick={this.handleClick} activeLink={activeLink} />

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

export default connect(mapStateToprops, { fetchListRequest, fetchGenresRequest, fetchActiveTab })(SideMenue);