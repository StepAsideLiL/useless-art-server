const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    transactionId: { type: String, require: true },
    totalAmount: { type: Number, require: true },
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    orderedImages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        require: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
