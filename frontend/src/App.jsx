import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AssetList from "./pages/AssetList";
import CreateBooking from "./pages/CreateBooking";
import Navbar from "./components/Navbar";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/Dashboard";
import BorrowingHistory from "./pages/BorrowingHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/assets" element={<AssetList />} />
        <Route path="/bookings" element={<CreateBooking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<BorrowingHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;