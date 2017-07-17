import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { persistStore } from 'redux-persist';

import App from './app';
import routes from './router';

class Root extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(this.props.store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    const { store, history } = this.props;

    if (!this.state.rehydrated) {
      return <div>Loading...</div>;
    }

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>{routes}</App>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default Root;
