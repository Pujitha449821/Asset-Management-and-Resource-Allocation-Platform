import { useEffect, useState } from "react";
import API from "../services/api";

function BorrowingHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/bookings/history");

      console.log(res.data);

      setHistory(res.data.bookings || res.data.history || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load history");
    }
  };

  return (
    <div>
      <h2>Borrowing History</h2>

      {history.map((item) => (
        <div key={item._id}>
          <p>Asset: {item.assetId?.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Status: {item.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BorrowingHistory;