import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = { email: email, password: password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");

    navigate("/login");
  };

  return (

    <div style={container}>

      <div style={card}>

        <h2>Create Account ✨</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button style={button} onClick={handleSignup}>
          Sign Up 🚀
        </button>

      </div>

    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#a18cd1,#fbc2eb)"
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  width: "350px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
};

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd"
};

const button = {
  marginTop: "20px",
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  background: "#7F5AF0",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Signup;

