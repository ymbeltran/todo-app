import React, {useState} from 'react';

const useThemeMode = () => {

    const [themeMode, setThemeMode] = useState(true);
    const [showList, setShowList] = useState('all');

    const handleThemeMode = () => {
      themeMode? document.body.classList.add('light'): document.body.classList.remove('light');
        setThemeMode(!themeMode);
      }
      const showTodos = (sta) => {
        setShowList(sta);
      }
  return {
    themeMode,
    showList,
    handleThemeMode,
    showTodos
  }
};

export default useThemeMode;
