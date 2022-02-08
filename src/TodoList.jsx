import React,{useContext} from 'react';
import AppContext from './AppContext';
import TodoItem from './TodoItem';
/* import check from "/styles/images/icon-check.svg";
import cross from "/styles/images/icon-cross.svg"; */

const todos = [
  {id:'todo-0', text: "Complete online JavaScript course", completed: true},
  {id:'todo-1', text: "Jog around the park 3x", completed: false},
  {id:'todo-2', text: "10 minutes meditation", completed: false},
  {id:'todo-3', text: "Read for 1 hour", completed: false},
  {id:'todo-4', text: "Pick up groceries", completed: false},
  {id:'todo-5', text: "Complete Todo App on Frontend Mentor", completed: false}
]

const TodoList = () => {
  const {list} = useContext(AppContext);
  let toShow=todos;
  console.log('Mostrar: '+{list});
  if (list=='active') {
    toShow=todos.filter(crt =>!crt.completed)
  }else if (list=='completed') {
    toShow=todos.filter(crt =>crt.completed)
  }
  
  return (
      <ul className='todo-list'>
        {toShow.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
      </ul>
  );
};

export default TodoList;
