import React from 'react';
import PropTypes from 'prop-types';

import './app.scss';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
