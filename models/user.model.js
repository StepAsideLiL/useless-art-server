const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true },
    image: { type: String, require: false },
    role: {
      type: String,
      enum: ["customer", "seller", "admin"],
      default: "customer",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
