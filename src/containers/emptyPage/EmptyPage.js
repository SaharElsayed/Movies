import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import history from '../../app/history';
import Button from '../../components/button/Button';
import './EmptyPage.scss';

class EmptyPage extends React.Component{
  render(){
    return(
      <div className="empty-container text-center">
        <div className="mb-5">
          <h1 className="text-capitalize">Sorry!</h1>
          <h2 className="text-capitalize">{this.props.statement}</h2>
        </div>
        <img src='/assets/svgs/empty.svg' alt="No movies" className="mb-5" />
        <Button 
          text='Home'
          className='btn m-auto'
          icon={faHome}
          order='0'
          size='lg'
          dir='r'
          action={() => history.push('/')}
        />
      </div>
    )
  }
}

export default EmptyPage;