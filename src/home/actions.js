export const COUNT_INCREMENT = 'COUNT_INCREMENT';
export const COUNT_DECREMENT = 'COUNT_DECREMENT';

export const toDoIncrement = () => ({
  type: COUNT_INCREMENT,
});

export const toDoDecrement = () => ({
  type: COUNT_DECREMENT,
});
