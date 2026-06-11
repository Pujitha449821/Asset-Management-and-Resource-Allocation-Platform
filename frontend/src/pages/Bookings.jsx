import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import "../styles/bookings.css";

function Bookings() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="bookings-container">
        <h1>My Bookings</h1>

        <table className="assets-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Asset</th>
              <th>Status</th>
              <th>Return Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BK001</td>
              <td>DSLR Camera</td>
              <td>Approved</td>
              <td>15 June 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bookings;