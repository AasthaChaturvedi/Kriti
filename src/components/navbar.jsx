
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn")
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(null);
    navigate("/login");
  };

  return (

    <nav style={navStyle}>

      <h2 style={logoStyle}>Kriti ✨</h2>

      <div style={linksContainer}>

        <Link style={linkStyle} to="/">Home</Link>

        {isLoggedIn && (
          <Link style={linkStyle} to="/dashboard">Planner</Link>
        )}

        {!isLoggedIn && (
          <>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/signup">Signup</Link>
          </>
        )}

        {isLoggedIn && (
          <button onClick={handleLogout} style={logoutButton}>
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  color: "white"
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "22px"
};

const linksContainer = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "500"
};

const logoutButton = {
  border: "none",
  background: "#ff4d6d",
  color: "white",
  padding: "7px 15px",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Navbar;

