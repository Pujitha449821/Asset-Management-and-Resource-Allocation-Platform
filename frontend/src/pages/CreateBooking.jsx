import { useState } from "react";
import API from "../services/api";

function CreateBooking() {
  const [formData, setFormData] = useState({
    assetId: "",
    quantity: 1,
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", formData);

      alert("Booking Request Created");
    } catch (error) {
      console.error(error);
      alert("Booking Failed");
    }
  };

  return (
    <div>
      <h2>Create Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="assetId"
          placeholder="Asset ID"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="startDate"
          type="date"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="endDate"
          type="date"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Create Booking
        </button>
      </form>
    </div>
  );
}

export default CreateBooking;