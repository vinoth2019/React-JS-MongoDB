import { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import axios from 'axios';
import { baseURL } from './utilities/constant';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updatedUI, setUpdatedUI] = useState(false);
  const [updateId, setUpdateId] = useState(null); 


  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data);
      setTasks(res.data)
    })
  }, [updatedUI]);

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: input}).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdatedUI((prevState) => !prevState)
    })
  }

  const updatedMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id)

  }
  const updatedTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task:input }).then((res) => {
      console.log(res.data);
      setUpdatedUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("")
    })
  }

  return (
    <div className="App">  
       <textarea rows="4" cols="50" value={input} onChange={(e) => setInput(e.target.value)} /> 
       <button type='submit' onClick={updateId ? updatedTask : addTask}>{updateId ? "Edit": "Comment"}</button>

       <ul>
         {tasks.map((task) => (
          <List key={task._id} id={task._id} task={task.task} setUpdatedUI={setUpdatedUI} updatedMode={updatedMode}/>
         ))}
       </ul>
    </div>
    
  );
}

export default App;
