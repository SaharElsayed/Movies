import React from 'react';
import Button from '../button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.scss';
import { connect } from 'react-redux';
import { fetchDiscoverMoviesRequest } from '../../redux/actions/index';

class Pagination extends React.Component{
  
  handlePagination = (page) => {    
    const {fetchDiscoverMoviesRequest, activeTab} = this.props;
    console.log(activeTab.title);

    fetchDiscoverMoviesRequest(activeTab.id, activeTab.title, {page})
  }

  render(){
    
    const { page } = this.props;
    
    return (
      <div className="row justify-content-between">
        {
          page > 1 &&
          <Button
          text= {`page ${page}`}
          className='btn'
          icon={faArrowLeft}
          order='0'
          size='lg'
          dir='r'
          action={() => this.handlePagination(page - 1)}
        />
        }
        <Button
          text={`page ${page + 1}`}
          className='btn'
          icon={faArrowRight}
          order='1'
          size='lg'
          dir='l'
          action={() => this.handlePagination(page + 1)}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {...state}
}
export default connect(mapStateToProps, {fetchDiscoverMoviesRequest})(Pagination);