const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getAllBookings,
  approveBooking,
  rejectBooking,
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

router.put(
  "/:id/approve",
  authMiddleware,
  authorizeRoles("admin"),
  approveBooking
);

router.put(
  "/:id/reject",
  authMiddleware,
  authorizeRoles("admin"),
  rejectBooking
);

module.exports = router;