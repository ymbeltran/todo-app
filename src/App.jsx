import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';
import HeaderTodo from './HeaderTodo';
import ThemeMode from './ThemeMode';
import TodoListContainer from './TodoListContainer';
import TodoMenu from './TodoMenu';
import '/styles/main.scss';

const App = () => {
  return (
    <>
    <HeaderTodo/>
    <section className='todo-container'>
        <div className='todo-container__title'>
          <h1>T  O  D  O</h1>
          <ThemeMode/>
        </div>
        <AddTodo/>
        <TodoListContainer/>
    </section>
    </>
  );
  /* 
  theme mode
  add todo
  todo list
  todo item
  Menu
    trash completed
    todo count
    show options
  */
};

export default App;
