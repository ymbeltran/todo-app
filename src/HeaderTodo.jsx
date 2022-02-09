import React, {useContext}  from 'react';
import AppContext from './AppContext';
// import useThemeMode from './useThemeMode';
import headImgdk from "/styles/images/bg-desktop-dark.jpg";
import headImglg from "/styles/images/bg-desktop-light.jpg";
import headImgdkmb from "/styles/images/bg-mobile-dark.jpg";
import headImglgmb from "/styles/images/bg-mobile-light.jpg";

const HeaderTodo = () => {
  const {themeMode} = useContext(AppContext);

  return (
    <header>
      <div className='todo-head'>
        <img src={themeMode? headImgdk:headImglg} className='todo-head__bg' />
        <img src={themeMode? headImgdkmb:headImglgmb} className='todo-head__bg--mobile' />
      </div>      
    </header>
  );
};

export default HeaderTodo;
