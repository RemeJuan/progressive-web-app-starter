import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopNav.scss';

const TopNav = ({ navItems }) => (
  <nav>
    {navItems.map(item => (
      <a className={`${styles['nav-item']}`} key={item.id} href={item.link}>{item.name}</a>
    ))}
  </nav>
);

TopNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape()),
};

TopNav.defaultProps = {
  navItems: [],
};

export default TopNav;
