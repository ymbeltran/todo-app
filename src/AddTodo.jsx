import React from 'react';
import {AppContext} from './AppContext';

const AddTodo = () => { 
 
  return (
    <AppContext.Consumer>
    {({
      addTodo,
      themeMode
    }) => {
      const addingTodo = (event) => {
        if (event.charCode === 13) {
          addTodo(event.target.value);
          event.target.value='';
        }
      }
    return(<div className={themeMode?'AddTodo':'AddTodo light'}>
      <div className='todo-list__item-checkbox AddTodo-checkbox'></div>
      <input type="text" placeholder="Create a new todo..." onKeyPress={addingTodo} />
    </div>)
    }}
    </AppContext.Consumer>
  );
};

export default AddTodo;
