import { useState, useEffect } from "react";
import { updateStreak } from "../utils/streak";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function Planner() {

 
  const [openDropdown, setOpenDropdown] = useState(null);


  const [streak, setStreak] = useState(0);


  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");


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


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("streak"));
    if (saved) {
      setStreak(saved.count);
    }
  }, []);


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

 
    const updatedStreak = updateStreak();
    setStreak(updatedStreak.count);

   
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

  

const getSubjects = () => {
  if (!category || !subCategory) return [];

  return subjectData[category]?.[subCategory] || [];
};

const categoryOptions = [
  { value: "school", label: "📚School" },
  { value: "graduation", label: "🎓Graduation" },
  { value: "competitive", label: "🎯Competitive Exams" }
];

  
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

      

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        

        {category === "school" && (
          <select onChange={(e) => setSubCategory(e.target.value)}>
            <option>Select Class</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
        )}

        {category === "school" &&
              subCategory === "Class 1" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
            </select>
              )}

        {category === "school" &&
            subCategory === "Class 2" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
            </select>
        )}
{category === "school" &&
            subCategory === "Class 3" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
            </select>
        )}

        {category === "school" &&
            subCategory === "Class 4" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
            </select>
        )}

        {category === "school" &&
            subCategory === "Class 5" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 6" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
              <option>Physical Education</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 7" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
              <option>Physical Education</option>
              <option>Music</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 8" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
              <option>Physical Education</option>
              <option>Music</option>
              <option>Drama</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 9" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
              <option>Physical Education</option>
              <option>Music</option>
              <option>Drama</option>
              <option>Economics</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 10" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
              <option>Hindi</option>
              <option>General Knowledge</option>
              <option>Special Language</option>
              <option>Social Studies</option>
              <option>Computer Science</option>
              <option>Art</option>
              <option>Physical Education</option>
              <option>Music</option>
              <option>Drama</option>
              <option>Economics</option>
              <option>Business Studies</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 11" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Computer Science</option>
              <option>Economics</option>
              <option>Business Studies</option>
              <option>Accountancy</option>
            </select>
        )}
        {category === "school" &&
            subCategory === "Class 12" && (
            <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>Math</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Computer Science</option>
              <option>Economics</option>
              <option>Business Studies</option>
              <option>Accountancy</option>
              <option>Political Science</option>
            </select>
        )}
        
          {
      category === "graduation" && (
          <select onChange={(e) => setSubCategory(e.target.value)}>
      
            <option>Computer Science</option>
            <option>Business</option>
            <option>Arts</option>
            <option>Science</option>
            <option>Engineering</option>
            <option>Medicine</option>
            <option>Law</option>
            <option>Economics</option>
            <option>Psychology</option>
            <option>Sociology</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Computer Science" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Data Structures</option>
            <option>Algorithms</option>
            <option>Operating Systems</option>
            <option>Databases</option>
            <option>Computer Networks</option>
            <option>Software Engineering</option>
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Business" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Human Resources</option>
            <option>Operations</option>
            <option>Strategy</option>
            <option>Entrepreneurship</option>
            <option>International Business</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Arts" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>History</option>
            <option>Literature</option>
            <option>Philosophy</option>
            <option>Political Science</option>
            <option>Sociology</option>
            <option>Psychology</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Science" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Astronomy</option>
            <option>Geology</option>
            <option>Environmental Science</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Engineering" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Electrical</option>
            <option>Computer</option>
            <option>Chemical</option>
            <option>Aerospace</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Medicine" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Anatomy</option>
            <option>Physiology</option>
            <option>Biochemistry</option>
            <option>Pathology</option>
            <option>Pharmacology</option>
            <option>Microbiology</option>
          </select>
        )}
          {category === "graduation" && subCategory === "Law" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Constitutional Law</option>
            <option>Criminal Law</option>
            <option>Civil Law</option>
            <option>Corporate Law</option>
            <option>International Law</option>
            <option>Intellectual Property</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Economics" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Microeconomics</option>
            <option>Macroeconomics</option>
            <option>Econometrics</option>
            <option>International Economics</option>
            <option>Development Economics</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Psychology" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Cognitive Psychology</option>
            <option>Behavioral Psychology</option>
            <option>Developmental Psychology</option>
            <option>Social Psychology</option>
            <option>Clinical Psychology</option>
          </select>
        )}
        {category === "graduation" && subCategory === "Sociology" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Social Theory</option>
            <option>Cultural Sociology</option>
            <option>Urban Sociology</option>
            <option>Rural Sociology</option>
            <option>Medical Sociology</option>
          </select>
        )}
        

        {category === "competitive" && (
          <select onChange={(e) => setSubCategory(e.target.value)}>
            <option>Select Exam</option>
            <option>SSC</option>
            <option>Banking</option>
            <option>JEE</option>
            <option>NEET</option>
            <option>UPSC</option>
            <option>GATE</option>
            <option>CAT</option>
            <option>GRE</option>
            <option>GMAT</option>
          </select>
        )}
        {category === "competitive" && subCategory === "SSC" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>General Awareness</option>
            <option>Quantitative Aptitude</option>
            <option>Reasoning</option>
            <option>English Language</option>
          </select>
        )}
        {category === "competitive" && subCategory === "Banking" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>General Awareness</option>
            <option>Quantitative Aptitude</option>
            <option>Reasoning</option>
            <option>English Language</option>
          </select>
        )}
        {category === "competitive" && subCategory === "JEE" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Mathematics</option>
          </select>
        )}
        {category === "competitive" && subCategory === "NEET" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
          </select>
        )}
        {category === "competitive" && subCategory === "UPSC" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>History</option>
            <option>Geography</option> 
            <option>Polity</option>
            <option>Economics</option>
            <option>Environment</option>
            <option>Current Affairs</option>
          </select>
        )}
        {category === "competitive" && subCategory === "GATE" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Computer Science</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Chemical Engineering</option>
          </select>
        )}
        {category === "competitive" && subCategory === "CAT" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Quantitative Aptitude</option>
            <option>Data Interpretation</option>
            <option>Logical Reasoning</option>
            <option>Verbal Ability</option>
          </select>
        )}
        {category === "competitive" && subCategory === "GRE" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Quantitative Reasoning</option>
            <option>Verbal Reasoning</option>
            <option>Analytical Writing</option>
          </select>
        )}
        {category === "competitive" && subCategory === "GMAT" && (
          <select onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            <option>Quantitative Reasoning</option>
            <option>Verbal Reasoning</option>
            <option>Integrated Reasoning</option>
            <option>Analytical Writing</option>
          </select>
        )}   
        <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setSubCategory("");
          setForm({ ...form, subject: "" });
        }}

        >
       
          </select>

                  

          <input name="duration" placeholder="Duration" value={form.duration} onChange={handleChange} style={inputStyle} />

          <select name="priority" value={form.priority} onChange={handleChange} style={inputStyle}>
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

        <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} style={inputStyle} />

        <input type="date" name="date" value={form.date} onChange={handleChange} style={inputStyle} />

      
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

   
      <defs>
        <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C83FD" />
          <stop offset="100%" stopColor="#B983FF" />
        </linearGradient>
      </defs>

    
      <XAxis dataKey="date" stroke="#888" />
      <YAxis stroke="#888" />

      <Tooltip
        contentStyle={{
          background: "white",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      />


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
const dropdownBox = {
  padding: "12px",
  borderRadius: "12px",
  background: "linear-gradient(135deg,#fdfbff,#f3f3ff)",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  transition: "0.2s"
};

const dropdownMenu = {
  position: "absolute",
  top: "110%",
  width: "100%",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  overflow: "hidden",
  zIndex: 10
};

const dropdownItem = {
  padding: "10px",
  cursor: "pointer"
};

export default Planner;