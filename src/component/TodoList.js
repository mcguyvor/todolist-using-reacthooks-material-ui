import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText, Divider } from '@material-ui/core';
import Todo from '../component/Todo';


export default function TodoList(props){
    return(
        <Paper>
            {props.todos.map(idx=>
            <>
                <ListItem>
                    <ListItemText><Todo task={idx.task} id={idx.id} key={idx.id} completed={idx.completed} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo} editTodo={props.editTodo}/></ListItemText>
                </ListItem>
                <Divider/>
            </>
                )}
        </Paper>
    );
}