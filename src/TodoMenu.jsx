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
  
  const handleClearOpt = () => {
    todosL.clearCompleted();
  } 

  return (
      <div className={themeMode?'todo-menu':'todo-menu light'}>
        <ToDoCounter todoL={todosL}/>
        <div className='todo-menu__options'>
        <ul >
            <li className='todo-menu__options--selected' onClick={()=>handleMenuOptions('all')}>All</li>
            <li onClick={()=>handleMenuOptions('active')}>Active </li>
            <li onClick={()=>handleMenuOptions('completed')}>Completed</li>
        </ul>
        </div>
        <p className='todo-menu__clear' onClick={()=>handleClearOpt()} >Clear completed</p>
      </div>
  );
};

export default TodoMenu;
