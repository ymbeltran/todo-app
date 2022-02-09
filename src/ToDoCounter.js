import React from 'react';
import useHandleTodo from './useHandleTodo';

const ToDoCounter = ({todoL}) => {
  return (
  <p>{todoL.countTodoActive()} items left</p>
  );
};

export default ToDoCounter;
