import React, { Suspense } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import history from '../../app/history';
import * as LazyComponent from './../../utils/LazyLoaded';
import './NotFound.scss';
import Loader from './../../components/loader/Loader';

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <LazyComponent.TabTitle title={`Movie Library`} />
        </Suspense>
        <div className="empty-container text-center">
          <div className="mb-5">
            <h1 className="text-capitalize">{this.props.emptyTitle}</h1>
            <h2 className="text-capitalize">{this.props.statement}</h2>
          </div>
          <img src={this.props.emptySrc} alt="Not Found" className="mb-5" />
          <Suspense fallback={<Loader />}>
            <LazyComponent.Button
              text='Home'
              className='btn m-auto'
              icon={faHome}
              order='0'
              size='lg'
              dir='r'
              action={() => history.push('/')}
            />
          </Suspense>
        </div>

      </React.Fragment>
    )
  }
}

export default NotFound;