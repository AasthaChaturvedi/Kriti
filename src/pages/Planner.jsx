import { useState, useEffect, use } from "react";

function Planner() {

  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const [tasks, setTasks] = useState([]);

 
 useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  

  const addTask = () => {

    const newTask = {
      subject,
      duration,
      priority,
      notes,
      date,
     
    };

    setTasks([...tasks, newTask]);

    setSubject("");
    setDuration("");
    setPriority("");
    setNotes("");
    setDate("");
    
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>

      <h1>Study Planner</h1>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />

      
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
     
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.subject} - {task.duration} - {task.priority} - {task.deadline} - {task.notes} - {task.date}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Planner;