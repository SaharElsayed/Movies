import React, { Suspense } from 'react';

const MoviesList = React.lazy(() => import('./../moviesList/MoviesList'))
class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<div>...Loading</div>}>
          <MoviesList />
        </Suspense>
      </React.Fragment>
    );
  }
}


export default Home;
