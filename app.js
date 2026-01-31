require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRouter = require("./routes/contactRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
