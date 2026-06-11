import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h3>Total Assets</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Available Assets</h3>
            <p>18</p>
          </div>

          <div className="card">
            <h3>Active Bookings</h3>
            <p>4</p>
          </div>

          <div className="card">
            <h3>Pending Requests</h3>
            <p>3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;