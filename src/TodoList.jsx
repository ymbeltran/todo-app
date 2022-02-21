import React,{useContext} from 'react';
import {AppContext} from './AppContext';
import TodoItem from './TodoItem';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

const TodoList = () => {

  const {showList,todoListing, saveTodos} = useContext(AppContext);
  
  let toShow=todoListing;
  
  if (showList=='active') {
    toShow=todoListing.filter(crt =>!crt.completed)
  }
  else if (showList=='completed') {
    toShow=todoListing.filter(crt =>crt.completed)
  }
  
  // console.log("Show the list: ", toShow);

  const reorder = (list, startI, endI) => {
    const result = [...list];
    const [removed] = result.splice(startI,1);
    result.splice(endI,0,removed);
    return result;
  }

  return (
    <DragDropContext 
    
    onDragEnd={(result)=> {
      
      const {source, destination} = result;
      if (!destination) {
        return;
      }
      if (source.index === destination.index && source.droppableId === destination.droppableId)  {
        return;
      }
      saveTodos(reorder(todoListing, source.index, destination.index));
      }}>

      <Droppable droppableId='todoList' >
      {(droppableProvided) => (
      <div 
      {...droppableProvided.droppableProps} 
      ref={droppableProvided.innerRef}
      className='todo-list'>
        
        {toShow.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(draggableProvided)=>(
                    <TodoItem 
                    provided={draggableProvided} 
                    innerRef={draggableProvided.innerRef}
                    idTodo={toShow.indexOf(todo)} 
                    todo={todo}  
                    />)}
                    </Draggable>
                ))}
      {droppableProvided.placeholder}
      </div>)}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
