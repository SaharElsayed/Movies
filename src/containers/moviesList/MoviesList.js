import React from 'react';
import { connect } from 'react-redux';
import { ImgBaseURL } from '../../utils/Constants';
import './MoviesList.scss';
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

const Card = React.lazy(() => import('../../components/card/Card'));
const Sorting = React.lazy(() => import('../../components/sorting/Sorting'));
const Pagination = React.lazy(() => import('./../../components/pagination/Pagination'));
const NotFound = React.lazy(() => import('../notFound/NotFound'));

class MoviesList extends React.Component {
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
          (!key && search.length === 0 && !recommended) || (artistKey) ? <Sorting /> : ''
        }
        {
          (results && results.length > 0) ?
            <div className="card-wrapper">
              {results.map((item, i) => {
                return (
                  <Link to={`/movie/${item.id}`} key={i} onClick={this.scrollToTop()}>
                    <Card
                      title={item.title}
                      id={item.id}
                      img={item.poster_path ? `${ImgBaseURL}${item.poster_path}` : `/assets/svgs/nothing.svg`}
                      rating={item.vote_average}
                      size='lg'
                    />
                  </Link>
                )
              })} </div> :
            <NotFound
              emptyTitle={emptyTitle}
              statement={emptyStatement ? emptyStatement : `there were no results for ${search}`}
              emptySrc={emptySrc || '/assets/svgs/empty.svg'}
            />
        }
        <Pagination page={page} />
      </React.Fragment>
    );
  }
}

const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops)(MoviesList);