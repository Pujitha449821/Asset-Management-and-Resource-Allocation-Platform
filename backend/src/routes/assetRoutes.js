const express = require("express");
const router = express.Router();

const { addAsset } = require("../controllers/assetController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Admin Only
router.post(
  "/add",
  authMiddleware,
  authorizeRoles("admin"),
  addAsset
);

module.exports = router;