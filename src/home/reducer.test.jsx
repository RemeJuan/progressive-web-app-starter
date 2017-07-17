import countReducer, { initialState } from './reducer';
import {
  COUNT_INCREMENT,
  COUNT_DECREMENT,
} from './actions';

describe('REDUCER: countReducer', () => {
  it('Initial state', () => {
    expect(
      countReducer(undefined, {}),
    ).toEqual(initialState);
  });

  it('COUNT_INCREMENT', () => {
    const state = {
      ...initialState,
    };
    const action = {
      type: COUNT_INCREMENT,
    };
    const expected = {
      ...state,
      count: 1,
    };

    expect(
      countReducer(state, action),
    ).toEqual(expected);
  });

  it('COUNT_DECREMENT', () => {
    const state = {
      ...initialState,
    };
    const action = {
      type: COUNT_DECREMENT,
    };
    const expected = {
      ...state,
      count: -1,
    };

    expect(
      countReducer(state, action),
    ).toEqual(expected);
  });
});
