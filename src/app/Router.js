import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('../containers/home/Home'));

export const Routes = (
  <Suspense fallback={<div>...Loading</div>}>
    <Route>
      <Switch>
        <Home path="/" exact />
      </Switch>
    </Route>
  </Suspense>
);