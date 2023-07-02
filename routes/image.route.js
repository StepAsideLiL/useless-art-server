const express = require("express");
const {
  getAllImages,
  getSingleImage,
  addImage,
  getSellerImages,
  updateImage,
  deleteImage,
} = require("../controllers");

const router = express.Router();

router.get("/images", getAllImages);
router.get("/images/:id", getSingleImage);
router.post("/images", addImage);

router.get("/images/:username/", getSellerImages);
router.patch("/images/:username/:id", updateImage);
router.delete("/images/:username/:id", deleteImage);

module.exports = router;
