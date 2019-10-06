import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import uuid from 'uuid';
function TodoApp(){
    const initialTodo = [
        {id:uuid(),task:'Clean fish tank',completed : false},
        {id:uuid(),task:'Wash car',completed : true},
        {id:uuid(),task:'Eat lunch',completed : false},

    ];
    const [todos,setTodos] = useState(initialTodo);
    const addTodo = newTodoText =>{
        let numId = uuid();
        setTodos([...todos,{id:numId ,task: newTodoText,completed:false}]);
        console.log(numId);
    };
    const removeTodo = todoId =>{
        //filter todo
        const updateTodo = todos.filter(idx=> idx.id !== todoId);
        //call setTodos from useState to set new array
        setTodos(updateTodo);
    }
    const toggleTodo = todoId=>{
      const updateTodo = todos.map(idx=>
            idx.id ===todoId ? {...idx,completed : !idx.completed} : idx            
        )
        setTodos(updateTodo);
    }
    const editTodo = (todoId, newTask) => {
        const updateTodo = todos.map(idx=>
            idx.id === todoId ? {...todos, task : newTask} : idx
            );
        setTodos(updateTodo);
    }
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

    