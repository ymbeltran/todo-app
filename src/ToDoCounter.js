import React from 'react';
import useHandleTodo from './useHandleTodo';

const ToDoCounter = ({todoL}) => {
  // const todoL = useHandleTodo();
  // todoL.countTodoActive();
  console.log('-- ',todoL);
  return (
  <p>{todoL.countTodoActive()} items left</p>
  );
};

export default ToDoCounter;
