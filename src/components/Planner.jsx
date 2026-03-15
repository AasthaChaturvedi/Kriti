import { useState, useEffect } from "react";


function Planner() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    subject: "",
    duration: "",
    priority: "",
    notes: "",
    date: ""
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addTask = () => {

    if (!form.subject) return;

    if (editingIndex !== null) {

      const updated = tasks.map((task, i) =>
        i === editingIndex ? { ...form, completed: task.completed } : task
      );

      setTasks(updated);
      setEditingIndex(null);

    } else {

      const newTask = {
        ...form,
        completed: false
      };

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

  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    setForm(tasks[index]);
    setEditingIndex(index);
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg,#a18cd1,#fbc2eb)"
      }}
    >

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >

        <h1 style={{ textAlign: "center" }}>Kriti Study Planner ✨</h1>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          type="text"
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "#7a4fd1",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>

          {tasks.map((task, index) => (

            <li
              key={index}
              style={{
                padding: "15px",
                marginBottom: "12px",
                borderRadius: "15px",
                background: "#faf8ff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
              }}
            >

              <h3 style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                />
                {task.subject}
              </h3>

              <p>⏱ {task.duration}</p>
              <p>🔥 {task.priority}</p>
              <p>📝 {task.notes}</p>
              <p>📅 {task.date}</p>

              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd"
};

export default Planner;

