import {
  COUNT_INCREMENT,
  COUNT_DECREMENT,
} from './actions';

export const initialState = {
  count: 0,
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
