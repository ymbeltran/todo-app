import React, {useState} from 'react';

const useThemeMode = () => {

    const [themeMode, setThemeMode] = useState(true);

    const handleThemeMode = () => {
      themeMode? document.body.classList.add('light'): document.body.classList.remove('light');
        setThemeMode(!themeMode);
      }
  return {
    themeMode,
    handleThemeMode
  }
};

export default useThemeMode;
