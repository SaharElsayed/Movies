import React, { Suspense } from 'react';
import * as LazyComponent from '../../utils/LazyLoaded';
import empty from './../../assets/svgs/error.svg'
import Loader from '../loader/Loader';

const ErrorPage = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <LazyComponent.TabTitle title={`Error`} />
        <div className="mx-auto my-5">
          <LazyComponent.NotFound
            emptyTitle='Somthing went wrong!'
            statement={`The resource you requested couldn't be found.`}
            emptySrc={empty}
          />
        </div>
      </Suspense>
    </React.Fragment>
  )
}

export default ErrorPage;