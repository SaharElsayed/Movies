import React from 'react';
import { Router } from 'react-router';
import { Routes } from './Router';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App;
