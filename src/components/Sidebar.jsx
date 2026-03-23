import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div style={sidebarStyle}>

      <h3 style={titleStyle}>Dashboard</h3>

      <div style={menuContainer}>

        <Link style={menuItem} to="/dashboard">
          📅 Planner
        </Link>

        <Link style={menuItem} to="/">
          🏠 Home
        </Link>

        <Link style={menuItem} to="/login">
          🔐 Login
        </Link>

      </div>

    </div>

  );
}

const sidebarStyle = {
  width: "230px",
  height: "100vh",
  padding: "25px",
  background: "linear-gradient(180deg,#fdfbff,#f6f3ff)",
  borderRight: "1px solid #eee"
};

const titleStyle = {
  marginBottom: "30px",
  fontWeight: "700",
  color: "#555"
};

const menuContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const menuItem = {
  textDecoration: "none",
  color: "#444",
  padding: "12px 15px",
  borderRadius: "12px",
  fontWeight: "500",
  background: "white",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

export default Sidebar;

