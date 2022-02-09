import React,{useContext, useState} from 'react';
import AppContext from './AppContext';
import TodoItem from './TodoItem';
import useHandleTodo from './useHandleTodo';

const TodoList = ({todoL}) => {

  const showL = useContext(AppContext);
  
  let toShow=todoL.todoListing.todos;
  
  if (showL.showList=='active') {
    toShow=toShow.filter(crt =>!crt.completed)
  }
  else if (showL.showList=='completed') {
    toShow=toShow.filter(crt =>crt.completed)
  }
  
  console.log("Pinta la lista");

  return (
      <ul className='todo-list'>
        
        {toShow.map(todo => (
                    <TodoItem idTodo={toShow.indexOf(todo)} todo={todo} key={todo.id} todoManager={todoL} />
                ))}
      </ul>
  );
};

export default TodoList;
