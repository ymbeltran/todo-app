import React, {useContext} from 'react';
import AppContext from './AppContext';
import TodoList from './TodoList';
import TodoMenu from './TodoMenu';

const TodoListContainer = () => {
  const {themeMode} = useContext(AppContext);
  return (
      <section className={themeMode? 'todo-list-container':'todo-list-container-light'}>
        <TodoList />
        <TodoMenu />
      </section>
      
  );
};

export default TodoListContainer;
