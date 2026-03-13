import { useState, useEffect } from "react";

function Planner() {

  const [form, setForm] = useState({
  subject: "",
  duration: "",
  priority: "",
  notes: "",
  date: ""
});
const [search, setSearch] = useState("");
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
    if (editingIndex !== null) {

    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...form, completed: task.completed } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
  } else {
    const newTask = { ...form, completed: false };
    setTasks([...tasks, newTask]);
  }

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
      if (!task.subject.toLowerCase().includes(search.toLowerCase())) return false;
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });
    const sortedTasks = [...filteredTasks].sort((a, b) => new Date(a.date) - new Date(b.date)
);
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks =tasks.length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    const [editingIndex, setEditingIndex] = useState(null);
    const editTask = (index) => {
      const task = tasks[index];
      setForm(task);
      setEditingIndex(index);
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
        style={{
          display: "block",
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
       
      />

      <input
        type="text"
        placeholder="Duration"
        name="duration"
        value={form.duration}
        onChange={handleChange}
        style={{
          display: "block",
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <select 
        name="priority"
        value={form.priority}
        onChange={handleChange}
       style={{ display: "block", marginBottom: "10px", width: "100%" }}
    >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      
      <input
        type="text"
        placeholder="Notes"
        name="notes"
        value={form.notes}
        onChange={handleChange}
         style={{
          display: "block",
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        style={{
          display: "block",
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
     
<button
  onClick={editingIndex !== null ? updateTask : addTask}
  style={{
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "5px"
  }}
>
  Add Task
</button>
        <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
<div style={{ marginTop: "20px" }}>
  <h2>Progress: {progress}%</h2>
  <p>{completedTasks}/{totalTasks} tasks completed</p>
  <div style={{ 
     background: "#ddd",
     borderRadius: "10px", 
     overflow: "hidden", 
     height: "10px",
     }}>
    <div
      style={{
        width: `${progress}%`,
        background: "#4caf50",
        height: "20px"
      }}
    ></div>
  </div>
  <p>{progress}%</p>
</div>
<input
  type="text"
  placeholder="Search task..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      <ul style={{ listStyle: "none", padding: 0 }}>
  {sortedTasks.map((task, index) => (
    <li
      key={index}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "12px",
        marginTop: "12px",
        background: "#ffffff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
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
<button
  onClick={() => editTask(index)}
  style={{
    marginRight: "10px",
    background: "#2196F3",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px"
  }}
>
  Edit
</button>

<button
  onClick={() => deleteTask(index)}
  style={{
    background: "#f44336",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px"
  }}
>
  Delete
</button>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Planner;