# Progressive Web App Starter Kit

A simple style-less scaffold for quickly starting up new react apps.

This application is already configured with offline and PWA support, with [Redux Persist](https://github.com/rt2zz/redux-persist) all state is automatically stored to the users machine in either IndexDB or LocaStorage and restored on refresh.

Manifest and ServiceWorker are all generated by WebPack, automatically all assets run through webpack will be added to the cache manifest, so images, js, css, etc.

CSS Modules is configured with css class minification, eg:

```
import React from 'react';

import styles from './styles.scss';

const comp = () => (<div className="this-is-a-really-long-class-name" />);

becomes:

<div> class="b_d"></div>
```

For simplicity, webpack is setup to exclude SASS files from modules, so for using global styles, like a framework or grid system, you can simply include these in any SASS file, `src/core/app.sass`;
SASS files should not be used for local styles or component styles.

## Setup

* Clone down the repo
* `rim -rf .git`
* `git init`
* `git remote add origin NEW-REPO-PATH`
* `yarn install`

## Config

`config/config.js` contains most of what you would need to handle the configuration.

Here you would add the application friendly title, URL and PWA config.

## HOC's

Higher Order Components are located in `src/core/hoc`

### AsyncLoader

An async loader is included for use with router based bundling, an example of usage can be seen commented out in `src/core/router.js`.

This will cause webpack to split the JS into additional bundles beyond simply app and vendor, when used you will also see x.hash.js, where x is a number representing a route.

Each route loaded async will get its unique code split into a separate bundle file which will be loaded when that route is accessed ensuring the main bundle only contains globally required code and that for your main route(s).

It does verge off a bit from true SPA, but available for use at your discretion.
If however your app is locked down to authorized users then, initial performance can be gained by having the additional routes only loaded to users browsers after they are logged in.

## Bundle

This is setup as a react app, however it uses Preact and Preact-Compat for a more optimal bundle size, I however do not know exactly how much of a drop in replacement Preact really is, which is why I set it up like this, if you run into any issues you can simply install react and react-dom, however I felt this an optimal route as it takes nearly 60% off the vendor bundle size.

## Testing

Testing is handled by Jest, testing commands are:

* `yarn test`
* `yarn test:watch`
