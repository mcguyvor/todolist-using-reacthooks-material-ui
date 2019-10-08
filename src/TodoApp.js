import React,{useState,useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import uuid from 'uuid';
import useTodoState from './hooks/useTodoState';
import useLocalStorageState from './hooks/useLocalStorage';
function TodoApp(){
    const initialTodo = JSON.parse(window.localStorage.getItem('todos')|| []);
    const {todos,addTodo,removeTodo,toggleTodo,editTodo} = useTodoState(initialTodo);
    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todos))
        
    },[todos])
    
    return(
        <Paper style={{
            boxSizing:'border-box',
            padding:0,
            margin:0,
            height:'100vh',
            backgroundColor:'white'
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:'64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop:'1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo = {addTodo} />
                    <TodoList todos={todos} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    />
                </Grid>
            </Grid>
           
        </Paper>
    );
}
export default TodoApp;

//TodoApp
    //- TodoForm
    //-TodoList
    //-Todoitem

    