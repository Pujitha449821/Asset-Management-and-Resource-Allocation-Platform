import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>

      {" | "}

      <Link to="/register">Register</Link>

      {" | "}

      <Link to="/assets">Assets</Link>
    </nav>
  );
}

export default Navbar;