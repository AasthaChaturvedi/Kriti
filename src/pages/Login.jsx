import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Fake login for MVP
    localStorage.setItem("user", email);

    navigate("/dashboard");
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#a18cd1,#fbc2eb)"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          textAlign: "center"
        }}
      >

        <h2 style={{ marginBottom: "10px" }}>
          Welcome Back ✨
        </h2>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Login to continue planning
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "12px",
            border: "none",
            background: "#7a4fd1",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Login 🚀
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don't have an account? Sign up
        </p>

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

export default Login;
