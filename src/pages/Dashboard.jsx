import Sidebar from "../components/sidebar";
import Planner from "../components/Planner";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "30px", width: "100%" }}>
        <h1>Dashboard</h1>

        <Planner />

      </div>

    </div>
  );
}

export default Dashboard;