import React, {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

const AppContext = React.createContext({});

/* const todos = [
        {id:'todo-0', text: "Complete online JavaScript course", completed: true},
        {id:'todo-1', text: "Jog around the park 3x", completed: false},
        {id:'todo-2', text: "10 minutes meditation", completed: false},
        {id:'todo-3', text: "Read for 1 hour", completed: false},
        {id:'todo-4', text: "Pick up groceries", completed: false},
        {id:'todo-5', text: "Complete Todo App on Frontend Mentor", completed: false}
      ]; */

const TodoProvider = (props) => {
        const {
        todoStoraged: todoListing,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('appTodo-v1', []);
 
    const [totalTodos, setTotalTodos] = useState(todoListing.filter(crt =>!crt.completed).length);
    const [countTodos, setCountTodos] = useState(todoListing.filter(crt =>!crt.completed).length);
    const [showList, setShowList] = useState('all');
    const [themeMode, setThemeMode] = useState(true);

    const addTodo = (toAdd) =>{
        let newTodo = {id:'todo-'+totalTodos, text:toAdd, completed:false}
        const newList = [...todoListing,newTodo];

        saveTodos(newList);
        setTotalTodos(totalTodos+1);
    }
    const removeTodo = (toRemoveId) =>{
        const id = todoListing.findIndex(crt => crt.id === toRemoveId)
        const newList = [...todoListing];
        newList.splice(id,1);
        
        saveTodos(newList);
    }

    const countTodoActive = () =>{
        const count = todoListing.filter(crt =>!crt.completed).length;
        setCountTodos(count);
    }

    const completeTodo = (toComplete) =>{
        let todo = todoListing.findIndex(crt => crt.id === toComplete.id);
        const newList = [...todoListing];
        newList[todo].completed=!newList[todo].completed;
        
        saveTodos(newList);
    }

    const clearCompleted = () =>{
        let newList=todoListing.filter(crt =>!crt.completed);
        saveTodos(newList);
    }
    const showTodos = (sta) => {
        setShowList(sta);
      }
    const handleThemeMode = () => {
        themeMode? document.body.classList.add('light'): document.body.classList.remove('light');
        setThemeMode(!themeMode);
    }
    React.useEffect(() => {
        countTodoActive();
      },[todoListing]);

    return (<AppContext.Provider value={{
            todoListing,
            addTodo,
            removeTodo,
            countTodoActive,
            completeTodo,
            clearCompleted,
            showList,
            showTodos,
            themeMode,
            handleThemeMode,
            setCountTodos,
            countTodos,
            loading,
            error,
            saveTodos
        }}>
        {props.children}
    </AppContext.Provider>
    );
}

export { AppContext, TodoProvider };