import React, {useState} from 'react';
import { AppContext } from './AppContext';
import check from "/styles/images/icon-check.svg";
import cross from "/styles/images/icon-cross.svg";

const TodoItem = ({todo, provided, innerRef}) => {

  const [showCross, setShowCross] = useState(false);
      
  const handleMouseEnter = e => {
    setShowCross(true);
  }
  const handleMouseLeave = e => {
    setShowCross(false);
  }

  return (
    <AppContext.Consumer>
        {({
          completeTodo,
          removeTodo,
        }) => (
        
      <div 
          key={todo.id} 
          id={todo.id} 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
          className={todo.completed?'todo-list__item completed':'todo-list__item'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>

          <div 
          className='todo-list__item-checkbox' 
          onClick={()=>completeTodo(todo)}></div>
          
          {
            todo.completed && <figure 
            className='check-img' 
            onClick={()=>completeTodo(todo)}>
            <img src={check} alt="" /></figure>
          }
          <p className='todo-list__item-text ' >{todo.text} </p>
          <figure className='cross' onClick={()=>removeTodo(todo.id)}>
              {showCross && <img src={cross} alt="" /> }
          </figure>
      </div>
      )}
      </AppContext.Consumer>
  );
};

export default TodoItem;
