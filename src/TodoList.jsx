import React from 'react';

const TodoList = () => {
  return (
      <ul className='todo-list'>
          <div className='todo-list__item completed'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text '>Complete online JavaScript course</li>
          </div>
          <div className='todo-list__item'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text'>Jog around the park 3x</li>
          </div>
          <div className='todo-list__item'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text'>10 minutes meditation</li>
          </div>
          <div className='todo-list__item'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text'>Read for 1 hour</li>
          </div>
          <div className='todo-list__item'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text'>Pick up groceries</li>
          </div>
          <div className='todo-list__item'>
            <div className='todo-list__item-checkbox'></div>
            <li className='todo-list__item-text'>Complete Todo App on Frontend Mentor</li>
          </div>
      </ul>
  );
};

export default TodoList;
