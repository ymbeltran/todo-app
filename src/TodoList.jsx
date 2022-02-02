import React from 'react';
import check from "/styles/images/icon-check.svg";
import cross from "/styles/images/icon-cross.svg";

const TodoList = () => {
  return (
      <ul className='todo-list'>
        <div className='todo-list__item completed'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" />
          </figure>
          <li className='todo-list__item-text '>Complete online JavaScript course</li>
          <figure className='cross'>
            <img src={cross} alt=""  />
          </figure>
        </div>
        <div className='todo-list__item'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" hidden />
          </figure>
          <li className='todo-list__item-text'>Jog around the park 3x</li>
          <figure className='cross'>
            <img src={cross} alt="" hidden />
          </figure>
        </div>
        <div className='todo-list__item'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" hidden />
          </figure>
          <li className='todo-list__item-text'>10 minutes meditation</li>
          <figure className='cross'>
            <img src={cross} alt="" hidden />
          </figure>
        </div>
        <div className='todo-list__item'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" hidden />
          </figure>
          <li className='todo-list__item-text'>Read for 1 hour</li>
          <figure className='cross'>
            <img src={cross} alt="" hidden />
          </figure>
        </div>
        <div className='todo-list__item'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" hidden />
          </figure>
          <li className='todo-list__item-text'>Pick up groceries</li>
          <figure className='cross'>
            <img src={cross} alt="" hidden />
          </figure>
        </div>
        <div className='todo-list__item'>
          <div className='todo-list__item-checkbox'></div>
          <figure className='check-img'>
            <img src={check} alt="" hidden />
          </figure>
          <li className='todo-list__item-text'>Complete Todo App on Frontend Mentor</li>
          <figure className='cross'>
            <img src={cross} alt="" hidden />
          </figure>
        </div>
      </ul>
  );
};

export default TodoList;
