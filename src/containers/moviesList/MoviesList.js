import React from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { ImgBaseURL } from '../../utils/Constants';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import empty from './../../assets/svgs/empty.svg';
import nothing from './../../assets/svgs/nothing.svg';
import './MoviesList.scss';

class MoviesList extends React.Component {
  componentDidMount() {
    const { fetchMoviesRequest, activeTab: { key, id }, sortingKey } = this.props;
    fetchMoviesRequest(key, {
      page: 1,
      with_genres: key ? '' : id,
      sort_by: sortingKey
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const {
      list: { results, page },
      activeTab: { title, key },
      searchKeyword: { search },
      pageTitle,
      recommended,
      artistKey,
      emptyTitle,
      emptyStatement,
      emptySrc,
      subTitle
    } = this.props;

    return (
      <React.Fragment>
        <div className="header-wrapper">
          <h1 className="h1-light">
            {pageTitle || title}
          </h1>
          <h2 className="h2-light">
            {subTitle || 'movie'}
          </h2>
        </div>
        {
          (!key && search.length === 0 && !recommended) || (artistKey) ? <LazyComponent.Sorting /> : ''
        }
        {
          (results && results.length > 0) ?
            <div className="card-wrapper">
              {results.map((item, i) => {
                return (
                  <Link to={`/movie/${item.id}`} key={i} onClick={this.scrollToTop()}>
                    <LazyComponent.Card
                      title={item.title}
                      id={item.id}
                      img={item.poster_path ? `${ImgBaseURL}${item.poster_path}` : nothing}
                      rating={item.vote_average}
                      size='lg'
                    />
                  </Link>
                )
              })} </div> :
            <LazyComponent.NotFound
              emptyTitle={emptyTitle}
              statement={emptyStatement ? emptyStatement : `there were no results for ${search}`}
              emptySrc={emptySrc || empty}
            />
        }
        <LazyComponent.Pagination page={page} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchMoviesRequest: actions.fetchMoviesRequest,
  fetchActiveTab: actions.fetchActiveTab
};

const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops, mapDispatchToProps)(MoviesList);