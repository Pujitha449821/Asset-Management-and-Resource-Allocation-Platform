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

module.exports = {
  createBooking,
};