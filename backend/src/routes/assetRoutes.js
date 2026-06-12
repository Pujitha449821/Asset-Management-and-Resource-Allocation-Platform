const express = require("express");
const router = express.Router();

const {
  addAsset,
  getAllAssets,
} = require("../controllers/assetController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Admin Only
router.post(
  "/add",
  authMiddleware,
  authorizeRoles("admin"),
  addAsset
);

router.get(
  "/",
  authMiddleware,
  getAllAssets
);

module.exports = router;