const { userSchema } = require("../models");

// POST: "/users"
const registerUser = async (req, res) => {
  const userInfo = req.body;

  const user = new userSchema(userInfo);

  const isUserExist = await userSchema.findOne({ username: userInfo.username });

  if (isUserExist) {
    return res.send({ error: true, message: "Username taken." });
  }

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET: "/users/:username"
const getSingleUser = (req, res) => {
  const username = req.params.username;

  console.log(username);

  userSchema
    .findOne({ username: username })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET: "/users"
const getAllUsers = (req, res) => {
  userSchema
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// PATCH: "/users/role/:id"
const giveRole = (req, res) => {
  const userId = req.params.id;
  const role = req.body;

  userSchema
    .findByIdAndUpdate(userId, role, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// PATCH: "/users/:id"
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userInfo = req.body;

  const isUserExist = await userSchema.findOne({ username: userInfo.username });

  if (isUserExist) {
    return res.send({ error: true, message: "Username taken." });
  }

  userSchema
    .findByIdAndUpdate(userId, userInfo, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE: "/users/:id"
const deleteUser = (req, res) => {
  const userId = req.params.id;

  userSchema
    .findByIdAndDelete(userId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  registerUser,
  getSingleUser,
  getAllUsers,
  giveRole,
  updateUser,
  deleteUser,
};
