import React, {useState} from 'react';
import sunLight from "/styles/images/icon-sun.svg";

const ThemeMode = () => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
      toggle? document.body.classList.add('light'): document.body.classList.remove('light');
        setToggle(!toggle);
        console.log("AJa!"+toggle);
      }
  return (
    <img src={sunLight} onClick={() =>handleToggle()} className='todo-container__toggleTheme' />
    
    );
};

export default ThemeMode;
