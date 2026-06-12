import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/summary",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data.dashboard);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Total Assets: {data.totalAssets}</h3>
      <h3>Total Bookings: {data.totalBookings}</h3>
      <h3>Pending: {data.pendingBookings}</h3>
      <h3>Approved: {data.approvedBookings}</h3>
      <h3>Issued: {data.issuedBookings}</h3>
      <h3>Returned: {data.returnedBookings}</h3>
      <h3>Rejected: {data.rejectedBookings}</h3>
    </div>
  );
}

export default Dashboard;