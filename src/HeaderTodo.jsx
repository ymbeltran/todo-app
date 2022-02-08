import React, {useContext}  from 'react';
import AppContext from './AppContext';
// import useThemeMode from './useThemeMode';
import headImgdk from "/styles/images/bg-desktop-dark.jpg";
import headImglg from "/styles/images/bg-desktop-light.jpg";

const HeaderTodo = () => {
  const {themeMode} = useContext(AppContext);

  return (
    <header>
      <div className='todo-head'>
        <img src={themeMode? headImgdk:headImglg} className='todo-head__bg'/>
      </div>      
    </header>
  );
};

export default HeaderTodo;
