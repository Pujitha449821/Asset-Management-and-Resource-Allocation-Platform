const express = require("express");
const router = express.Router();

const {
  getDashboardSummary,
  getMostUtilizedAssets,
  getOverdueAssets,
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("admin"),
  getDashboardSummary
);

router.get(
  "/most-utilized-assets",
  authMiddleware,
  authorizeRoles("admin"),
  getMostUtilizedAssets
);

router.get(
  "/overdue-assets",
  authMiddleware,
  authorizeRoles("admin"),
  getOverdueAssets
);

module.exports = router;