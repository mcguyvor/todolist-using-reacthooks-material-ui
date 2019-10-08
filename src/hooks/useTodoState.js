import React from 'react';
import {useState} from 'react';
import uuid from 'uuid';
import useLocalStorage from './useLocalStorage';
export default initialTodo =>{
    const [todos, setTodos] = useLocalStorage('todos',initialTodo);
return {
    todos,
     addTodo : newTodoText =>{
    setTodos([...todos,{id: uuid(),task: newTodoText,completed:false}]);
     },
     removeTodo : todoid =>{
    //filter todo
     const updateTodo = todos.filter(idx=>idx.id!== todoid );
    setTodos(updateTodo);
    },
    toggleTodo : todoId =>{
        const updateTodos = todos.map(idx=> 
              idx.id === todoId? {...idx, completed : ! idx.completed} : idx 
        );
        setTodos(updateTodos);
    },
    editTodo : (todoId,newTask)=>{
        const updateTodos = todos.map(idx=>
           idx.id===todoId? {...idx, task: newTask} : idx );
        setTodos(updateTodos);
    }
}
}