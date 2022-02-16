import React,{useContext, useState} from 'react';
import {AppContext} from './AppContext';
import TodoItem from './TodoItem';

const TodoList = () => {

  const {showList,todoListing} = useContext(AppContext);
  
  let toShow=todoListing;
  
  if (showList=='active') {
    toShow=todoListing.filter(crt =>!crt.completed)
  }
  else if (showList=='completed') {
    toShow=todoListing.filter(crt =>crt.completed)
  }
  
  // console.log("Show the list: ", toShow);

  return (
      <ul className='todo-list'>
        
        {toShow.map(todo => (
                    <TodoItem idTodo={toShow.indexOf(todo)} todo={todo} key={todo.id} />
                ))}
      </ul>
  );
};

export default TodoList;
