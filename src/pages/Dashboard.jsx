import Sidebar from "../components/Sidebar";
import Planner from "../components/Planner";

function Dashboard() {

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Planner />
      </div>

    </div>

  );
}

export default Dashboard;
