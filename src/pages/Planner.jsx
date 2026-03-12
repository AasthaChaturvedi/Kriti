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
  const [filter, setFilter] = useState("all");

 
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

    const newTask = { ...form, completed: false };
      

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
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "black";
    }
    };
    const filteredTasks = tasks.filter(task => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });

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
        <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredTasks.map((task, index) => (
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
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleComplete(index)}
  />
  {task.subject}
</h3>

      <p>⏱ Duration: {task.duration}</p>

      <p style={{ color: getPriorityColor(task.priority) }}>
  🔥 Priority: {task.priority}
</p>

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