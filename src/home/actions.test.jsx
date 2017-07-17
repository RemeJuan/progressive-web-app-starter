import {
  COUNT_INCREMENT,
  toDoIncrement,
  COUNT_DECREMENT,
  toDoDecrement,
} from './actions';

describe('TODO Actions', () => {
  it('toDoIncrement', () => {
    const expected = {
      type: COUNT_INCREMENT,
    };

    expect(
      toDoIncrement(),
    ).toEqual(expected);
  });

  it('toDoDecrement', () => {
    const expected = {
      type: COUNT_DECREMENT,
    };

    expect(
      toDoDecrement(),
    ).toEqual(expected);
  });
});
