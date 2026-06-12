require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());

console.log("AUTH ROUTES OBJECT:", authRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("BHAVANA TEST");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});