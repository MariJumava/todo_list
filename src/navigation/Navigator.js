import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../App.js';

export const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};
