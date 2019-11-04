import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { ImgBaseURL } from '../../utils/Constants';

import './MoviesList.scss';

const Card = React.lazy(() => import('../../components/card/Card'));
const Sorting = React.lazy(() => import('../../components/sorting/Sorting'));
const Pagination = React.lazy(() => import('./../../components/pagination/Pagination'));

class MoviesList extends React.Component {
  render() {
    const { list: { results, page }, pageTitle, activeTab: { title, key }, searchKeyword: { search }, recommended } = this.props;
    
    return (
      <React.Fragment>
        <div className="header-wrapper">
          <h1 className="h1-light">
            {
              pageTitle ? pageTitle : search.length === 0 ? title : search
            }
          </h1>
          <h2 className="h2-light">
            {
              search.length === 0 ? 'MOVIES' : 'SEARCH RESULTS'
            }
          </h2>
        </div>
        {
          (!key && search.length === 0 && !recommended) &&
          <Sorting />
        }
        <Row className="card-wrapper">
          {
            results &&
            results.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  id={item.id}
                  img={item.poster_path ? `${ImgBaseURL}${item.poster_path}` : `/assets/svgs/nothing.svg`}
                  rating={item.vote_average}
                  size='lg'
                />
              )
            })
          }
        </Row>
        <Pagination page={page} />
      </React.Fragment>
    );
  }
}


const mapStateToprops = state => {
  return { ...state };
}

export default connect(mapStateToprops)(MoviesList);