import React from 'react';
const NotFound = React.lazy(() => import('../notFound/NotFound'));

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="mx-auto my-5">
        <NotFound
          emptyTitle='Somthing went wrong!'
          statement={`The resource you requested couldn't be found.`}
          emptySrc={'/assets/svgs/error.svg'}
        />
      </div>
    )
  }
}

export default ErrorPage;