import React, {useContext} from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTodo from './AddTodo';
import HeaderTodo from './HeaderTodo';
import useThemeMode from './useThemeMode';
import TodoListContainer from './TodoListContainer';
import '/styles/main.scss';
import sunLight from "/styles/images/icon-sun.svg";
import moon from "/styles/images/icon-moon.svg";
import AppContext from './AppContext';

const App = () => {
  const theme = useThemeMode();
  
  const handleTMode = () => {
    theme.handleThemeMode();
}
  return (    
    <>
    <AppContext.Provider value={theme}>
    <HeaderTodo/>
    <section className='todo-container'>
        <div className='todo-container__title'>
          <h1>T  O  D  O</h1>
          <img src={theme.themeMode? sunLight:moon} onClick={() =>handleTMode()} className='todo-container__toggleTheme' />
          {/* <useThemeMode/> */}
        </div>
        <AddTodo/>
        <TodoListContainer/>
    </section>
    </AppContext.Provider>
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
