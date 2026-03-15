import { Link } from "react-router-dom";


function Home() {

  const cardStyle = {
    width: "230px",
    padding: "20px",
    borderRadius: "16px",
    background: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO SECTION */}

      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg,#a18cd1,#fbc2eb)"
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "white",
            marginBottom: "10px"
          }}
        >
          Plan Smart with Kriti ✨
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "18px"
          }}
        >
          A playful study planner to organize tasks, track progress,
          and stay productive every day.
        </p>

        <Link to="/dashboard">
          <button
            style={{
              marginTop: "25px",
              padding: "14px 26px",
              borderRadius: "30px",
              border: "none",
              background: "white",
              color: "#7a4fd1",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Start Planning 🚀
          </button>
        </Link>
      </div>

      {/* FEATURES SECTION */}

      <div
        style={{
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        <div style={cardStyle}>
          <h3>📚 Organize Tasks</h3>
          <p>Add subjects, notes, priorities and deadlines easily.</p>
        </div>

        <div style={cardStyle}>
          <h3>🔥 Set Priorities</h3>
          <p>Focus on important tasks first and stay productive.</p>
        </div>

        <div style={cardStyle}>
          <h3>📊 Track Progress</h3>
          <p>See how much work you’ve completed every day.</p>
        </div>
      </div>

      {/* CALL TO ACTION */}

      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "#f5f5ff"
        }}
      >
        <h2>Ready to plan your study schedule?</h2>

        <Link to="/dashboard">
          <button
            style={{
              marginTop: "15px",
              padding: "12px 22px",
              borderRadius: "25px",
              border: "none",
              background: "#7a4fd1",
              color: "white",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Open Planner
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Home;

