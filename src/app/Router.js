import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Loader from './../components/loader/Loader';
import { Router } from 'react-router';
import history from './history'
import * as LazyComponent from './../utils/LazyLoaded';

export const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Home path="/Movies" exact />
        <LazyComponent.MovieSingle path="/movie/:id" />
        <LazyComponent.ArtistDetails path='/artist/:id' />
        <LazyComponent.Search path='/search/:keyword' />
        <LazyComponent.ErrorPage path="**" />
      </Switch>
    </Router>
  </Suspense>
);