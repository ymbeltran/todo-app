import React, {useContext} from 'react';
import AddTodo from './AddTodo';
import AppContext from './AppContext';
import TodoList from './TodoList';
import TodoMenu from './TodoMenu';
import useHandleTodo from './useHandleTodo';

const TodoListContainer = () => {
  const {themeMode} = useContext(AppContext);
  const todoL = useHandleTodo();

  return (
    <>
      <AddTodo key={'addTodo'} todoManager={todoL} />
      <section className={themeMode? 'todo-list-container':'todo-list-container-light'}>
        <TodoList  todoL={todoL}/>
        <TodoMenu todosL={todoL}/>
      </section>
    </>
      
  );
};

export default TodoListContainer;
