const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//
router.get("/getUsers", userController.getUsers);
router.post("/create", userController.createUser);
router.get("/getUser/:_id", userController.getUserById);
router.put("/updateUser", userController.updateUser);
router.delete("/deleteUser/:_id", userController.deleteUser);

router.post("/users", userController.createUser);

module.exports = router;
