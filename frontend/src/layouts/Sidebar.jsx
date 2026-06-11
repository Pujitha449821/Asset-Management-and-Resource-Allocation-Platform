import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/assets">Assets</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;