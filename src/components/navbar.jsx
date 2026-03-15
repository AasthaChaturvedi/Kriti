import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>

      {/* Logo */}
      <h2 style={logoStyle}>Kriti ✨</h2>

      {/* Navigation */}
      <div style={linksContainer}>

        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/dashboard">Planner</Link>
        <Link style={loginButton} to="/login">Login</Link>

      </div>

    </nav>
  );
}

const navStyle = {
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  backdropFilter: "blur(10px)",
  background: "rgba(255,255,255,0.7)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  zIndex: 100
};

const logoStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  background: "linear-gradient(90deg,#7F5AF0,#FF6FD8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "1px"
};

const linksContainer = {
  display: "flex",
  alignItems: "center",
  gap: "20px"
};

const linkStyle = {
  textDecoration: "none",
  fontWeight: "500",
  color: "#333",
  transition: "0.3s"
};

const loginButton = {
  textDecoration: "none",
  background: "linear-gradient(135deg,#7F5AF0,#FF6FD8)",
  color: "white",
  padding: "8px 18px",
  borderRadius: "20px",
  fontWeight: "600",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
};

export default Navbar;
