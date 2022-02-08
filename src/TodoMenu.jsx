import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import ToDoCounter from './ToDoCounter';
import useShowList from './useShowList';

const TodoMenu = () => {
  const {themeMode} = useContext(AppContext);
  const list = useShowList();
  //{list.showList}
  const handleMenuOptions = (option) => {
    list.handleShowList(option);
    console.log(list.showList);
    // list.showList = option;
  }
  return (
      <div className={themeMode?'todo-menu':'todo-menu light'}>
        <ToDoCounter/>
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
