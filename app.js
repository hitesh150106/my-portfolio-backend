const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors({
  origin: true,
  credentials: true
}));


app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully 🚀" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
