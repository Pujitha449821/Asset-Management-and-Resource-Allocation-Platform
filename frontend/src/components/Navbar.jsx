import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>

      {" | "}

      <Link to="/register">Register</Link>

      {" | "}

      <Link to="/assets">Assets</Link>

      {" | "}

      <Link to="/my-bookings">My Bookings</Link>

      {" | "}

      <Link to="/history">History</Link>

      {" | "}

      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;