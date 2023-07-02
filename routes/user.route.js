const express = require("express");
const { isAuthenticated, isAdmin, isCustomer } = require("../middlewares");
const {
  registerUser,
  getSingleUser,
  getAllUsers,
  giveRole,
  updateUser,
  deleteUser,
} = require("../controllers");

const router = express.Router();

router.post("/users", registerUser);
router.get("/users/:username", getSingleUser);

router.get("/users", isAuthenticated, isAdmin, getAllUsers);
router.patch("/users/role/:id", isAuthenticated, isAdmin, giveRole);

router.patch("/users/:id", isAuthenticated, isCustomer, updateUser);
router.delete("/users/:id", isAuthenticated, isCustomer, deleteUser);

module.exports = router;
