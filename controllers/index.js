const {
  registerUser,
  getSingleUser,
  getAllUsers,
  giveRole,
  updateUser,
  deleteUser,
} = require("./user.controller");

const {
  getAllImages,
  getSingleImage,
  addImage,
  getSellerImages,
  updateImage,
  deleteImage,
} = require("./image.controller");

module.exports = {
  registerUser,
  getSingleUser,
  getAllUsers,
  giveRole,
  updateUser,
  deleteUser,
  getAllImages,
  getSingleImage,
  addImage,
  getSellerImages,
  updateImage,
  deleteImage,
};
