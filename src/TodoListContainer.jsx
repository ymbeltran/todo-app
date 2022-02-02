import React from 'react';
import TodoList from './TodoList';
import TodoMenu from './TodoMenu';

const TodoListContainer = () => {
  return (
      <section className='todo-list-container'>
        <TodoList />
        <TodoMenu />
      </section>
      
  );
};

export default TodoListContainer;
