const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: { type: String, require: true },
    rating: { type: Number, require: true },
    orderedImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
      require: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
