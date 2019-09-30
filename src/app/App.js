
import React from 'react';
import { Router } from 'react-router';
import history from './history'
import { Routes } from './Router';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        {Routes}
      </Router>
    );

  }
}

export default App;