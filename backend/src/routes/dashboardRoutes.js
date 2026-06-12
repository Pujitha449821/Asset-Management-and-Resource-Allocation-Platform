const express = require("express");
const router = express.Router();

const {
  getDashboardSummary,
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("admin"),
  getDashboardSummary
);

module.exports = router;