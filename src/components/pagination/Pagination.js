import React from 'react';
import Button from '../button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchMoviesRequest } from '../../redux/actions/index';
import './Pagination.scss';

class Pagination extends React.Component {

  handlePagination = (page) => {
    const { fetchMoviesRequest, activeTab: { key, id }, searchKeyword: { search }, sort: { sortingKey } } = this.props;

    fetchMoviesRequest(key, {
      page,
      with_genres: key ? '' : id,
      query: search ? search : '',
      sort_by: sortingKey ? sortingKey : ''
    });
  }

  render() {
    const { list: { page, total_pages } } = this.props;
    return (
      <div className={`row pagination ${page === 1 ? 'justify-content-end' : 'justify-content-between'}`}>
        {
          page > 1 &&
          <Button
            text={`page ${page - 1}`}
            className='btn'
            icon={faArrowLeft}
            order='0'
            size='lg'
            dir='r'
            action={() => this.handlePagination(page - 1)}
          />
        }
        {
          page < total_pages &&
          <Button
            text={`page ${page + 1}`}
            className='btn'
            icon={faArrowRight}
            order='1'
            size='lg'
            dir='l'
            action={() => this.handlePagination(page + 1)}
          />
        }
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps, { fetchMoviesRequest })(Pagination);