import React from 'react';
import {AppContext} from './AppContext';
import ToDoCounter from './ToDoCounter';

const TodoMenu = () => {

  return (
    <AppContext.Consumer>
      {({
        clearCompleted,
        showTodos,
        themeMode
      }) => {
        const handleMenuClick = (opt) => {
          
          if (opt === 'active') {
            document.getElementById('menu-1').classList.remove('todo-menu__options--selected');
            document.getElementById('menu-2').classList.add('todo-menu__options--selected');
            document.getElementById('menu-3').classList.remove('todo-menu__options--selected');
          }
          if (opt === 'completed') {
            document.getElementById('menu-1').classList.remove('todo-menu__options--selected');
            document.getElementById('menu-2').classList.remove('todo-menu__options--selected');
            document.getElementById('menu-3').classList.add('todo-menu__options--selected');
          }
          if (opt === 'all') {
            document.getElementById('menu-1').classList.add('todo-menu__options--selected');
            document.getElementById('menu-2').classList.remove('todo-menu__options--selected');
            document.getElementById('menu-3').classList.remove('todo-menu__options--selected');
          }
          showTodos(opt);
        }
        return(
      <div className={themeMode?'todo-menu':'todo-menu light'}>
         <ToDoCounter />
        <div className='todo-menu__options'>
        <ul >
            <li id='menu-1' className='todo-menu__options--selected' onClick={()=>handleMenuClick('all')}>All</li>
            <li id='menu-2' onClick={()=>handleMenuClick('active')}>Active </li>
            <li id='menu-3' onClick={()=>handleMenuClick('completed')}>Completed</li>
        </ul>
        </div>
        <p className='todo-menu__clear' onClick={()=>clearCompleted()} >Clear completed</p>
      </div>
      )}}
    </AppContext.Consumer>
  );
};

export default TodoMenu;
