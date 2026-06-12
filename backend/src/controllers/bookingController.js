const Booking = require("../models/Booking");
const Asset = require("../models/Asset");

// Create Booking Request
const createBooking = async (req, res) => {
  try {
    const {
      assetId,
      quantity,
      startDate,
      endDate,
    } = req.body;

    // Check asset exists
    const asset = await Asset.findById(assetId);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found",
      });
    }

    // Check availability
    if (quantity > asset.availableQuantity) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available quantity",
      });
    }

    const booking = await Booking.create({
      userId: req.user.id,
      assetId,
      quantity,
      startDate,
      endDate,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Booking request created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Bookings
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user.id,
    })
      .populate("assetId", "name category")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Admin - Get All Bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "name email")
      .populate("assetId", "name category")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Approve Booking
const approveBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = "approved";

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking approved successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  approveBooking,
};