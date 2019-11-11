import React from 'react';
import TabTitle from './../../components/tabTitle/TabTitle';

const NotFound = React.lazy(() => import('../notFound/NotFound'));

class ErrorPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TabTitle title={`Error`} />
        <div className="mx-auto my-5">
          <NotFound
            emptyTitle='Somthing went wrong!'
            statement={`The resource you requested couldn't be found.`}
            emptySrc={'/assets/svgs/error.svg'}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default ErrorPage;