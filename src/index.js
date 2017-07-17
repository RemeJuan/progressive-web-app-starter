import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './core/store';
import Root from './core/root';

const store = configureStore();
const history = createHistory();

render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);
