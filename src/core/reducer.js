/* eslint-disable no-param-reassign */

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import countReducer from '~/home/reducer';

const appReducer = combineReducers({
  countReducer,
  routing,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APPLICATION') {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
