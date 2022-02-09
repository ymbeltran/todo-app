import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import ToDoCounter from './ToDoCounter';

const TodoMenu = (props) => {
  const {todosL} = props;
  const {themeMode} = useContext(AppContext);
  const showl = useContext(AppContext);
  
  const handleMenuOptions = (option) => {
    showl.showTodos(option);
  }
  
  return (
      <div className={themeMode?'todo-menu':'todo-menu light'}>
        <ToDoCounter todoL={todosL}/>
        <ul className='todo-menu__options'>
            <li className='todo-menu__options--selected' onClick={()=>handleMenuOptions('all')}>All</li>
            <li onClick={()=>handleMenuOptions('active')}>Active </li>
            <li onClick={()=>handleMenuOptions('completed')}>Completed</li>
        </ul>
        <p className='todo-menu__clear'>Clear completed</p>
      </div>
  );
};

export default TodoMenu;
