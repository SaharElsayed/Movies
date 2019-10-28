import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import Logo from './../../components/logo/Logo';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import List from '../../components/list/List';
import { fetchMoviesRequest, fetchSideListRequest, fetchActiveTab, setSearchKeyword } from '../../redux/actions/index';
import history from '../../app/history';
import './SideMenue.scss';

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

  handleClick = (api, id, name) => {
    const { setSearchKeyword, fetchActiveTab, fetchMoviesRequest } = this.props;

    setSearchKeyword({ search: "" });
    fetchActiveTab({ id: id, title: name, key: api });
    fetchMoviesRequest(api, {
      page: 1,
      with_genres: api ? '' : id
    });
    history.push('/');
  };

  render() {
    const { links } = this.state;
    const { sideMenue, activeTab: { id } } = this.props;

    return (
      <React.Fragment>
        <div className='side-menu'>
          <Logo />
          <List title='discover' links={links} handleClick={this.handleClick} activeLink={id} />
          <List title='geners' links={sideMenue} handleClick={this.handleClick} activeLink={id} />

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

export default connect(mapStateToprops, { fetchMoviesRequest, fetchSideListRequest, fetchActiveTab, setSearchKeyword })(SideMenue);