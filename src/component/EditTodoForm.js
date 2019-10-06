import React from 'react';
import { TextField } from '@material-ui/core';
import useinputState from '../hooks/useinputState';
function EditTodoForm(props){
    const [value, handleChange,reset] = useinputState(props.task);
    return (
    <form onSubmit ={ (e)=>{
        e.preventDefault();
        props.editTodo(props.id,value);
        reset();
        props.toggleIsEdit();
    }}
    style={{width:'50%',marginLeft:'1rem'}}
    
    >
        <TextField 
        margin='normal' 
        value ={value} 
        onChange={handleChange} 
        fullWidth
        />
    </form>
        );
    
}
export default EditTodoForm;