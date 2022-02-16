import React from 'react';
import { AppContext } from './AppContext';

const ToDoCounter = () => {
  return (
    <AppContext.Consumer>
      {({
        countTodos
      }) => (
      <p>{countTodos} items left</p>
      )}
    </AppContext.Consumer>
  );
};

export default ToDoCounter;
