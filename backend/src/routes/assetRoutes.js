const express = require("express");
const router = express.Router();

const {
  addAsset,
  getAllAssets,
  updateAsset,
  deleteAsset,
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

router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  updateAsset
);

router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  deleteAsset
);

module.exports = router;