import { Link } from "react-router-dom";
function Navbar () {
    return (
        <div>
            <h2>Kriti</h2>
            <Link to="/">Home</Link> |
            <Link to="/planner">Planner</Link> |
            <Link to="/dashboard">Dashboard</Link> |
            <Link to="/login">Login</Link> |
        </div>
    );
}
export default Navbar;                