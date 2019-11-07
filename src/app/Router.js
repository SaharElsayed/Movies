import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from './../components/loader/Loader';

const Home = React.lazy(() => import('../containers/home/Home'));
const MovieSingle = React.lazy(() => import('../containers/movieSingle/MovieSingle'));
const ArtistDetails = React.lazy(() => import('../containers/artist/ArtistDetails'));
const Search = React.lazy(() => import('../containers/search/Search'));
const ErrorPage = React.lazy(() => import('../containers/errorPage/ErrorPage'));
export const Routes = (
  <Suspense fallback={<Loader />}>
    <Route>
      <Switch>
        <Home path="/" exact />
        <MovieSingle path="/movie/:id" />
        <ArtistDetails path='/artist/:id' />
        <Search path='/search/:keyword' />
        <ErrorPage path="**" />
      </Switch>
    </Route>
  </Suspense>
);