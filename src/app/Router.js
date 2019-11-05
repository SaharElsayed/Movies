import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './../components/loader/Loader';

const Home = React.lazy(() => import('../containers/home/Home'));
const MovieSingle = React.lazy(() => import('../containers/movieSingle/MovieSingle'));
const ArtistDetails = React.lazy(() => import('../containers/artist/ArtistDetails'));


export const Routes = (
  <Suspense fallback={<Loader />}>
    <Route>
      <Switch>
        <Home path="/" exact />
        <MovieSingle path="/Movie/:id" />
        <ArtistDetails path='/artist/:id' />
      </Switch>
    </Route>
  </Suspense>
);