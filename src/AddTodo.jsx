import React, {useContext} from 'react';
import AppContext from './AppContext';

const AddTodo = () => {
  const {themeMode} = useContext(AppContext);
  return (
    <div className={themeMode?'AddTodo':'AddTodo light'}>
      <div className='todo-list__item-checkbox AddTodo-checkbox'></div>
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
};

export default AddTodo;
