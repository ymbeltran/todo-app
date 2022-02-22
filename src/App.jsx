import React from 'react';
import HeaderTodo from './HeaderTodo';
import TodoListContainer from './TodoListContainer';
import sunLight from "/styles/images/icon-sun.svg";
import moon from "/styles/images/icon-moon.svg";
import {AppContext} from './AppContext';
import {TodoProvider} from './AppContext';
import '/styles/main.scss';

const App = () => {

  return (
    <TodoProvider>
      <HeaderTodo/>
      <AppContext.Consumer>
        {({
          themeMode,
          handleThemeMode,
          error,
          loading,
          todoListing
        }) => {
          return(
        <section className='todo-container'>
            <div className='todo-container__title'>
              <h1>T  O  D  O</h1>
              <img 
                src={themeMode? sunLight:moon} 
                onClick={() =>handleThemeMode()} 
                className='todo-container__toggleTheme' 
              />
            </div>
            <TodoListContainer/>
            {error && <p className='todo-container__message'>Oops! We couldn't load your TODOs</p>}
            {loading && <p className='todo-container__message'>Loading, please be patient...</p>}
            {(!loading && todoListing.length===0) && <p className='todo-container__message'>¡Let's create your first TODO!</p>}
            {(!loading && todoListing.length > 0) && <p className='todo-container__message'>Drag and drop to reorder list</p>}
        </section>
        )}}
      </AppContext.Consumer>
    </TodoProvider>
  );
};

export default App;
