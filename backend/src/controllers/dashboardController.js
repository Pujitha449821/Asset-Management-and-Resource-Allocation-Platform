const Asset = require("../models/Asset");
const Booking = require("../models/Booking");

const getDashboardSummary = async (req, res) => {
  try {
    const totalAssets = await Asset.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      status: "pending",
    });

    const approvedBookings = await Booking.countDocuments({
      status: "approved",
    });

    const issuedBookings = await Booking.countDocuments({
      status: "issued",
    });

    const returnedBookings = await Booking.countDocuments({
      status: "returned",
    });

    const rejectedBookings = await Booking.countDocuments({
      status: "rejected",
    });

    res.status(200).json({
      success: true,
      dashboard: {
        totalAssets,
        totalBookings,
        pendingBookings,
        approvedBookings,
        issuedBookings,
        returnedBookings,
        rejectedBookings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardSummary,
};