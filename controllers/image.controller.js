const { imageSchema } = require("../models");

// GET: "/images"
const getAllImages = (req, res) => {
  imageSchema
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET: "/images/:id"
const getSingleImage = (req, res) => {
  const imageId = req.params.id;

  imageSchema
    .findById(imageId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addImage = (req, res) => {};

const getSellerImages = (req, res) => {};

const updateImage = (req, res) => {};

const deleteImage = (req, res) => {};

module.exports = {
  getAllImages,
  getSingleImage,
  addImage,
  getSellerImages,
  updateImage,
  deleteImage,
};
