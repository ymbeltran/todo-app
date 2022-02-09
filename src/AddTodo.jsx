import React, {useContext} from 'react';
import AppContext from './AppContext';

const AddTodo = (props) => {
  const {todoManager} = props;
  const {themeMode} = useContext(AppContext);
  
 const addingTodo = (event) => {
    if (event.charCode === 13) {
      todoManager.addTodo(event.target.value);
      event.target.value='';
    }
  }
  return (
    <div className={themeMode?'AddTodo':'AddTodo light'}>
      <div className='todo-list__item-checkbox AddTodo-checkbox'></div>
      <input type="text" placeholder="Create a new todo..." onKeyPress={addingTodo} />
    </div>
  );
};

export default AddTodo;
