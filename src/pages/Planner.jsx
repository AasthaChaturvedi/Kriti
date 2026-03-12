import { useState, useEffect } from "react";

function Planner() {

  const [form, setForm] = useState({
  subject: "",
  duration: "",
  priority: "",
  notes: "",
  date: ""
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

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

    const newTask = { ...form};
      

    setTasks([...tasks, newTask]);

    setForm({
      subject: "",
      duration: "",
      priority: "",
      notes: "",
      date: ""
    });
    
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>

      <h1>Study Planner</h1>

      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
       
      />

      <input
        type="text"
        placeholder="Duration"
        name="duration"
        value={form.duration}
        onChange={handleChange}
       

      />

      <input
        type="text"
        placeholder="Priority"
        name="priority"
        value={form.priority}
        onChange={handleChange}
    />

      
      <input
        type="text"
        placeholder="Notes"
        name="notes"
        value={form.notes}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
     
      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
  {tasks.map((task, index) => (
    <li
      key={index}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "10px",
        background: "#f9f9f9"
      }}
    >
      <h3>{task.subject}</h3>

      <p>⏱ Duration: {task.duration}</p>

      <p>🔥 Priority: {task.priority}</p>

      <p>📝 Notes: {task.notes}</p>

      <p>📅 Date: {task.date}</p>

      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Planner;