import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AsyncComponent from '~/core/hoc/hoc-AsyncComponent.jsx';
import HomePage from '~/home';

// const HomePage = AsyncComponent(() => import('../pages/home')
//   .then(module => module.default));

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);
