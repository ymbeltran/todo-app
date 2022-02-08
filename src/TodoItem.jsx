import React, {useState} from 'react';
import check from "/styles/images/icon-check.svg";
import cross from "/styles/images/icon-cross.svg";

const TodoItem = ({todo}) => {
  const [showCross, setShowCross] = useState(false);
      
  const handleMouseEnter = e => {
    setShowCross(true);
  }
  const handleMouseLeave = e => {
    setShowCross(false);
  }
  const toComplete = () =>{
    todo.completed=!todo.completed;
  }
  return (
      <div key={todo.id} id={todo.id} className={todo.completed?'todo-list__item completed':'todo-list__item'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className='todo-list__item-checkbox' onClick={()=>toComplete()}></div>
          {todo.completed && <figure className='check-img' onClick={()=>toComplete()}><img src={check} alt="" /></figure>}
          <li className='todo-list__item-text '>{todo.text}</li>
          <figure className='cross'>
              {showCross && <img src={cross} alt="" /> }
          </figure>
      </div>
  );
};

export default TodoItem;
