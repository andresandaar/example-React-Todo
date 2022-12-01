import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import {  TodoList } from "./TodoList";
import {  CreateTodoButton } from "./CreateTodoButton";
import {  TodoItem } from "./TodoItem";

/* import './App.css'; */
const todos=[
  {text:'cortar cebolla',completed:true},
  {text:'cortar cebolla1',completed:false},
  {text:'cortar cebolla2',completed:true},
  {text:'cortar cebolla3',completed:false},
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
            {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    
  );
}

export default App;
