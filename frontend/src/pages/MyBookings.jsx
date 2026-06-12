import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings/my-bookings");
      console.log(res.data);
      setBookings(res.data.bookings);
    } catch (error) {
      console.error(error);
      alert("Failed to load bookings");
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((booking) => (
        <div key={booking._id}>
          <p>Asset: {booking.assetId?.name}</p>
          <p>Quantity: {booking.quantity}</p>
          <p>Status: {booking.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default MyBookings;