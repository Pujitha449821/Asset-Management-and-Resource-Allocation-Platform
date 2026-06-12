const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Booking Request
router.post(
  "/",
  authMiddleware,
  createBooking
);

router.get(
  "/my-bookings",
  authMiddleware,
  getMyBookings
);

module.exports = router;