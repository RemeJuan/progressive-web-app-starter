import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, increase, decrease }) => (
  <div className="grid">
    <div className="col">{count}</div>
    <div className="col">
      <button className="col" onClick={increase}>+</button>
      <button className="col" onClick={decrease}>-</button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func,
  decrease: PropTypes.func,
};

Counter.defaultProps = {
  increase: undefined,
  decrease: undefined,
};

export default Counter;
