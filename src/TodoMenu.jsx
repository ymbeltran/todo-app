import React from 'react';
import ToDoCounter from './ToDoCounter';

const TodoMenu = () => {
  return (
      <div className='todo-menu'>
        <ToDoCounter/>
        <ul className='todo-menu__options'>
            <li className='todo-menu__options--selected'>All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
        <p className='todo-menu__clear'>Clear completed</p>
      </div>
  );
};

export default TodoMenu;
