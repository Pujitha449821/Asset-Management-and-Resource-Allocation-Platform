const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Booking Request
router.post(
  "/",
  authMiddleware,
  createBooking
);

module.exports = router;