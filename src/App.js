import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from "./Todo";
//Db
import db from "./firebase";
import firebase from "firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [db])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo} >Add Todo</Button>
      </form>

      <ul>
        {
          todos.map((todo) => (
            <Todo todo={todo} />
          ))
        }
      </ul>

    </div>
  );
}

export default App;
