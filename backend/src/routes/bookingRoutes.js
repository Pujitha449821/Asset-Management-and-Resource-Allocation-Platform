const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getAllBookings,
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Create Booking Request
router.post(
  "/",
  authMiddleware,
  createBooking
);

// User Bookings
router.get(
  "/my-bookings",
  authMiddleware,
  getMyBookings
);

// Admin - All Bookings
router.get(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  getAllBookings
);

module.exports = router;