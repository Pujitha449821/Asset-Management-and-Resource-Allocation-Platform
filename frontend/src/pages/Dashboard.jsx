import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <h1>Dashboard</h1>

      <div>Total Assets: 25</div>
      <div>Available Assets: 18</div>
      <div>Active Bookings: 4</div>
      <div>Pending Requests: 3</div>
    </>
  );
}

export default Dashboard;