import React  from 'react';
import headImg from "/styles/images/bg-desktop-dark.jpg";

const HeaderTodo = () => {

  return (
    <header>
      <div className='todo-head'>
        <img src={headImg} className='todo-head__bg'/>
      </div>      
    </header>
  );
};

export default HeaderTodo;
