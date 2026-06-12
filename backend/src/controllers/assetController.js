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

// Update Asset
const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Asset updated successfully",
      asset,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Asset
const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.params.id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Asset deleted successfully",
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
  updateAsset,
  deleteAsset,
};