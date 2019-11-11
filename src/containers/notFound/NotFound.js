import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import history from '../../app/history';
import Button from '../../components/button/Button';
import './NotFound.scss';
import TabTitle from './../../components/tabTitle/TabTitle';

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TabTitle title={`Movie Library`} />
        <div className="empty-container text-center">
          <div className="mb-5">
            <h1 className="text-capitalize">{this.props.emptyTitle}</h1>
            <h2 className="text-capitalize">{this.props.statement}</h2>
          </div>
          <img src={this.props.emptySrc} alt="No movies" className="mb-5" />
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
      </React.Fragment>
    )
  }
}

export default NotFound;