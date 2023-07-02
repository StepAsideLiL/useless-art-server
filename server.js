require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const userRouter = require("./routes/user.route");
// const imageRouter = require("./routes/image.route");

const { userRouter, imageRouter } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

// Middlewares.
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("UselessArt app is runing");
});

// Bypass routes.
app.use("/api/v1", userRouter);
app.use("/api/v1", imageRouter);

// Connect to DB.
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`UselessArt is running of port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
