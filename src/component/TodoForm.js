import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import useinputState from '../hooks/useinputState';
export default function TodoForm(props){
    const [value,handleChange,reset] = useinputState('');
    return(
        <Paper style={{margin:'1rem',padding:'0 1rem'}}>
            <form onSubmit={(evt)=>{
                evt.preventDefault();
                props.addTodo(value);
                reset();
            }}>
            <TextField value={value} 
            onChange={handleChange} 
            label='Add New Todo'
            fullWidth
            />
            </form>
        </Paper>
    );
}