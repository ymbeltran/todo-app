import React, {useState} from 'react';

const useLocalStorage = (item, initial) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [todoStoraged, setTodoStoraged] = useState(initial);
  
  React.useEffect(() => {
    // setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(item);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(item, JSON.stringify(initial));
          parsedItem = initial; 
          
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setTodoStoraged(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    // }, 1000);
  },[]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(item, stringifiedItem);
      setTodoStoraged(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    todoStoraged,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
