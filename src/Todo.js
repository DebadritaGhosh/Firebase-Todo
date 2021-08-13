import React, { useState, } from 'react'
import { Modal, Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from "./firebase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

const Todo = ({ todo }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('')
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
          todo: input      
        },{merge: true});

        setOpen(false);

    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h1>I am a modal</h1>
                    <input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                    <Button color="primary" variant="contained" onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary="Todo" secondary={todo.todo} />
                </ListItem>
                <Button color="primary" variant="contained" onClick={() => setOpen(true)}>Edit</Button>
                <Button color="secondary" variant="contained" onClick={e => db.collection('todos').doc(todo.id).delete()}>Delete ME</Button>
            </List>
        </>
    )
}

export default Todo;
