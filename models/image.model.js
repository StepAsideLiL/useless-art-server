const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageURL: { type: String, require: true },
    thumbnailURL: { type: String, require: true },
    prompt: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
