import { useState } from 'react';

const todosInfo = {
    todos : [
        {id:'todo-0', text: "Complete online JavaScript course", completed: true},
        {id:'todo-1', text: "Jog around the park 3x", completed: false},
        {id:'todo-2', text: "10 minutes meditation", completed: false},
        {id:'todo-3', text: "Read for 1 hour", completed: false},
        {id:'todo-4', text: "Pick up groceries", completed: false},
        {id:'todo-5', text: "Complete Todo App on Frontend Mentor", completed: false}
      ]
}

const useHandleTodo = () => {

    const [todoListing, setTodoListing] = useState(todosInfo);
    const [totalTodos, setTotalTodos] = useState(6);

    const addTodo = (toAdd) =>{
        let newTodo = {id:'todo-'+totalTodos, text:toAdd, completed:false}

        setTodoListing({
            todos: [...todoListing.todos, newTodo]
        });

        countTodoActive();
        setTotalTodos(totalTodos+1);
    }
    const removeTodo = (toRemove) =>{
        console.log('toRemove: ',toRemove);
        setTodoListing({
            ...todoListing,
            todos: todoListing.todos.filter(crt => crt.id !== toRemove.id)
          });
          console.log('After Removed: ',todoListing);
          countTodoActive();
    }

    const countTodoActive = () =>{
        return todoListing.todos.filter(crt =>!crt.completed).length;
    }

    const completeTodo = (toComplete) =>{
        let todo = todoListing.todos.find(crt => crt.id === toComplete.id);

        todo.completed = !todo.completed;
        console.log(todoListing);
        setTodoListing({
            todos: todoListing.todos
        });
        countTodoActive();
    }

    const clearCompleted = () =>{
        let toClear=todoListing.todos.filter(crt =>!crt.completed);
        
        setTodoListing({
            todos: toClear
        });
    }
  return {
      todoListing,
        addTodo,
        removeTodo,
        countTodoActive,
        completeTodo,
        clearCompleted
  }
};

export default useHandleTodo;
