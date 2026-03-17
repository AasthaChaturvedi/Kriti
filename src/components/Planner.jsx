import { useState, useEffect } from "react";
import { updateStreak } from "../utils/streak";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function Planner() {

  // 🔥 STREAK STATE
  const [streak, setStreak] = useState(0);

  // 📦 TASKS
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // 📝 FORM
  const [form, setForm] = useState({
    subject: "",
    duration: "",
    priority: "",
    notes: "",
    date: ""
  });

  const [editingIndex, setEditingIndex] = useState(null);

  // 💾 SAVE TASKS
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 🔥 LOAD STREAK
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("streak"));
    if (saved) {
      setStreak(saved.count);
    }
  }, []);

  // ✏️ HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ➕ ADD TASK
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

    // 🔥 UPDATE STREAK
    const updatedStreak = updateStreak();
    setStreak(updatedStreak.count);

    // 🔄 RESET FORM
    setForm({
      subject: "",
      duration: "",
      priority: "",
      notes: "",
      date: ""
    });
  };

  // ✅ TOGGLE COMPLETE
  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  // ❌ DELETE
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // ✏️ EDIT
  const editTask = (index) => {
    setForm(tasks[index]);
    setEditingIndex(index);
  };

  // 📊 GRAPH DATA (FIXED)
  const getChartData = () => {
    const dataMap = {};

    tasks.forEach((task) => {
      if (task.date) {
        const date = task.date;

        if (!dataMap[date]) {
          dataMap[date] = 0;
        }

        dataMap[date] += 1;
      }
    });

    return Object.keys(dataMap).map((date) => ({
      date,
      tasks: dataMap[date]
    }));
  };

  const chartData = getChartData();
  console.log(chartData);

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

        {/* 🔥 STREAK */}
        <h2 style={{
          color: "#ff7a00",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          🔥 {streak} Day Streak
        </h2>

        <h1 style={{ textAlign: "center" }}>
          Kriti Study Planner ✨
        </h1>

        {/* INPUTS */}
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} style={inputStyle} />
        <input name="duration" placeholder="Duration" value={form.duration} onChange={handleChange} style={inputStyle} />

        <select name="priority" value={form.priority} onChange={handleChange} style={inputStyle}>
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} style={inputStyle} />

        <input type="date" name="date" value={form.date} onChange={handleChange} style={inputStyle} />

        {/* ADD BUTTON */}
        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #7C83FD, #B983FF)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
            transition: "0.2s",
            boxShadow: "0 5px 15px rgba(124,131,253,0.4)"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>


        

       {/* 📊 CLASSY GRAPH */}
<div
  style={{
    marginTop: "25px",
    padding: "20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #f5f7ff, #fdfbff)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  }}
>
  <h3 style={{ marginBottom: "10px" }}>📊 Your Progress</h3>

  {chartData.length > 0 ? (
    <LineChart width={400} height={250} data={chartData}>

      {/* 🌈 Gradient */}
      <defs>
        <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C83FD" />
          <stop offset="100%" stopColor="#B983FF" />
        </linearGradient>
      </defs>

      {/* Axes */}
      <XAxis dataKey="date" stroke="#888" />
      <YAxis stroke="#888" />

      {/* Tooltip */}
      <Tooltip
        contentStyle={{
          background: "white",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      />

      {/* ✨ Smooth Line */}
      <Line
        type="monotone"
        dataKey="tasks"
        stroke="url(#colorLine)"
        strokeWidth={4}
        dot={{ r: 4 }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  ) : (
    <p>No data yet 📉</p>
  )}
</div>

        {/* TASK LIST */}
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {tasks.map((task, index) => (
            <li key={index} style={cardStyle}>

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

              <div style={{ marginTop: "10px" }}>
                <button onClick={() => editTask(index)} style={editBtn}>✏️ Edit</button>
                <button onClick={() => deleteTask(index)} style={deleteBtn}>🗑 Delete</button>
              </div>
              

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

// 🎨 STYLES
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd"
};

const cardStyle = {
  padding: "15px",
  marginBottom: "12px",
  borderRadius: "15px",
  background: "#faf8ff",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
};

const editBtn = {
  background: "#6c63ff",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "8px",
  cursor: "pointer"
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "8px",
  cursor: "pointer",
  marginLeft: "10px"
};

export default Planner;