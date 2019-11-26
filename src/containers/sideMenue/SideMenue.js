import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { faHeart, faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import Loader from './../../components/loader/Loader';
import history from '../../app/history';
import './SideMenue.scss';
import { slide as Menu } from "react-burger-menu";

class SideMenue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: 1, name: "Popular", api: 'popular', icon: faHeart },
        { id: 2, name: "Top Rated", api: 'top_rated', icon: faChartLine },
        { id: 3, name: "Upcoming", api: 'upcoming', icon: faTable }
      ],
      isOpened: false
    }
  };

  componentDidMount() {
    this.props.fetchSideListRequest();
  }

  handleClick = (api, id, name) => {
    const { setSearchKeyword, fetchActiveTab, fetchMoviesRequest, sort: { sortingKey } } = this.props;
    this.setState({isOpened: false});    
    setSearchKeyword({ search: "" });
    fetchActiveTab({ id: id === 0 ? 1 : id, title: name, key: api });
    fetchMoviesRequest(api, {
      page: 1,
      with_genres: api ? '' : id,
      sort_by: sortingKey
    });
    history.push('/');
  };

   isMenuOpen = ({ isOpened }) => {     
    this.setState({isOpened: isOpened})
  };

  render() {    
    const { links, isOpened } = this.state;
    const { sideMenue, activeTab: { id }, isMobile } = this.props;
    return (
      <React.Fragment>
        {
          isMobile ?
            <div className='mobile-menu'>
              <Suspense fallback={<Loader />}>
                <Menu {...this.props} isOpen={isOpened} onStateChange={this.isMenuOpen}>
                  <LazyComponent.List mobile title='discover' links={links} handleClick={this.handleClick} activeLink={id} />
                  <LazyComponent.List mobile title='geners' links={sideMenue} handleClick={this.handleClick} activeLink={id} />
                </Menu>
              </Suspense>
            </div>
            :
            <div className='side-menu'>
              <Suspense fallback={<Loader />}>
                <LazyComponent.Logo />
                <LazyComponent.List title='discover' links={links} handleClick={this.handleClick} activeLink={id} />
                <LazyComponent.List title='geners' links={sideMenue} handleClick={this.handleClick} activeLink={id} />
              </Suspense>
            </div>
        }
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchSideListRequest: actions.fetchSideListRequest,
  fetchMoviesRequest: actions.fetchMoviesRequest,
  fetchActiveTab: actions.fetchActiveTab,
  setSearchKeyword: actions.setSearchKeyword
};

const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops, mapDispatchToProps)(SideMenue);