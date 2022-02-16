import React from 'react';
import {AppContext} from './AppContext';
import ToDoCounter from './ToDoCounter';

const TodoMenu = () => {

  return (
    <AppContext.Consumer>
      {({
        clearCompleted,
        showTodos,
        themeMode,
      }) => (
      <div className={themeMode?'todo-menu':'todo-menu light'}>
         <ToDoCounter />
        <div className='todo-menu__options'>
        <ul >
            <li className='todo-menu__options--selected' onClick={()=>showTodos('all')}>All</li>
            <li onClick={()=>showTodos('active')}>Active </li>
            <li onClick={()=>showTodos('completed')}>Completed</li>
        </ul>
        </div>
        <p className='todo-menu__clear' onClick={()=>clearCompleted()} >Clear completed</p>
      </div>
      )}
    </AppContext.Consumer>
  );
};

export default TodoMenu;
