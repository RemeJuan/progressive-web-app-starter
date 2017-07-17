import React from 'react';
import { HeaderComponent, TopNavComponent } from '~/shared';
import Counter from './Counter';

const navItems = [{
  id: 1,
  name: 'Home',
  link: '/',
}, {
  id: 2,
  name: 'Other',
  link: '/',
}];

const Component = ({ count, increase, decrease }) => (
  <div>
    <header className="grid">
      <div className="col">
        <HeaderComponent />
      </div>
      <div className="col">
        <TopNavComponent navItems={navItems} />
      </div>
    </header>

    <main className="grid">
      <div className="col-2">
        <Counter count={count} increase={increase} decrease={decrease} />
      </div>
    </main>
  </div>
);

export default Component;
