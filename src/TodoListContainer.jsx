import React, {useContext} from 'react';
import AddTodo from './AddTodo';
import {AppContext} from './AppContext';
import TodoList from './TodoList';
import TodoMenu from './TodoMenu';

const TodoListContainer = () => {
  const {themeMode} = useContext(AppContext);
 
  return (
    <>
       <AddTodo key={'addTodo'} /> 
      <section className={themeMode? 'todo-list-container':'todo-list-container-light'}>
         <TodoList /> 
         <TodoMenu /> 
      </section>
    </>
      
  );
};

export default TodoListContainer;
