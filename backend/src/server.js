require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const assetRoutes = require("./routes/assetRoutes");

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

console.log("AUTH ROUTES OBJECT:", authRoutes);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("BHAVANA TEST");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});