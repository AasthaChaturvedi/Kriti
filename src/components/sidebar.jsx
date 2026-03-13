import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      background: "#f4f4f4",
      padding: "20px",
      height: "100vh"
    }}>
      <h3>Kriti</h3>

      <p><Link to="/dashboard">Dashboard</Link></p>
      <p><Link to="/planner">Planner</Link></p>
      <p><Link to="/login">Login</Link></p>
    </div>
  );
}

export default Sidebar;