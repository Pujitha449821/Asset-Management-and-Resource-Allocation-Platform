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

// Reject Booking
const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = "rejected";

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking rejected successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Issue Asset
const issueAsset = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.status !== "approved") {
      return res.status(400).json({
        success: false,
        message: "Only approved bookings can be issued",
      });
    }

    const asset = await Asset.findById(booking.assetId);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found",
      });
    }

    if (asset.availableQuantity < booking.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient asset quantity available",
      });
    }

    asset.availableQuantity -= booking.quantity;

    await asset.save();

    booking.status = "issued";
    booking.issuedAt = new Date();

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Asset issued successfully",
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
  rejectBooking,
  issueAsset,
};