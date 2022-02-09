import React, {useState} from 'react';
import check from "/styles/images/icon-check.svg";
import cross from "/styles/images/icon-cross.svg";

const TodoItem = (props) => {

  const {todo,todoManager} = props;
  
  const [showCross, setShowCross] = useState(false);
      
  const handleMouseEnter = e => {
    setShowCross(true);
  }
  const handleMouseLeave = e => {
    setShowCross(false);
  }
  const toComplete = () =>{
    todoManager.completeTodo(todo);
  }
  const deleteTodo= () =>{
    todoManager.removeTodo(todo);
  }
  return (
      <div key={todo.id} id={todo.id} className={todo.completed?'todo-list__item completed':'todo-list__item'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className='todo-list__item-checkbox' onClick={()=>toComplete()}></div>
          {todo.completed && <figure className='check-img' onClick={()=>toComplete()}><img src={check} alt="" /></figure>}
          <li className='todo-list__item-text '>{todo.text}</li>
          <figure className='cross' onClick={()=>deleteTodo(todo.id)}>
              {showCross && <img src={cross} alt="" /> }
          </figure>
      </div>
  );
};

export default TodoItem;
