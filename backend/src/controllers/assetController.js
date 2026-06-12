const Asset = require("../models/Asset");

// Add Asset
const addAsset = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      totalQuantity,
      availableQuantity,
      status,
    } = req.body;

    const asset = await Asset.create({
      name,
      category,
      description,
      totalQuantity,
      availableQuantity,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Asset added successfully",
      asset,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Assets
const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find();

    res.status(200).json({
      success: true,
      count: assets.length,
      assets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addAsset,
  getAllAssets,
};