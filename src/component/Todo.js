import React from 'react';
import ListItem from'@material-ui/core/ListItem';
import ListItemText from'@material-ui/core/ListItem';
import Checkbox from'@material-ui/core/Checkbox';
import IconButton from'@material-ui/core/IconButton';
import DeleteIcon from'@material-ui/icons/Delete';
import EditIcon from'@material-ui/icons/Edit';
import ListItemSecondaryAction from'@material-ui/core/ListItemSecondaryAction';
import useEdit from '../hooks/useEdit';  
import EditTodoForm from '../component/EditTodoForm';
function Todo(props){
    const [isEditing, toggleIsEdit] = useEdit(false);
    return (
        <ListItem >
            {isEditing? <EditTodoForm 
            editTodo={props.editTodo} 
            id={props.id} 
            task={props.task}
            toggleIsEdit ={toggleIsEdit}
            /> : 
            <>
                <Checkbox tabIndex={-1} checked={props.completed} onClick={()=>props.toggleTodo(props.id)}/>
                <ListItemText style={{textDecoration: props.completed? 'line-through' : 'none'}} key ={props.id}>{props.task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton arial-label='Delete' onClick={()=> props.removeTodo(props.id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton arial-label='Edit'onClick={toggleIsEdit}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    );
}
export default Todo;