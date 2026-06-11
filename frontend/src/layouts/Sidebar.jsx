import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h3>Menu</h3>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/assets">Assets</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;