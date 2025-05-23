const express = require("express");
const {
  addUser,
  addProfile,
  getUsers,
  searchUserProfile,
  updateProfile,
  deleteProfile
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/add-user", addUser);
router.post("/add-profile/:userId", addProfile);
router.get("/get-users", getUsers);
router.get("/search", searchUserProfile);
router.put("/update-profile/:userId/:profileName", updateProfile);
router.delete("/delete-profile/:userId/:profileName", deleteProfile);

module.exports = router;
