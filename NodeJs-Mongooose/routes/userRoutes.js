const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/userController");

router.post("/createUser", userContoller.createUser);
router.get("/getUsers", userContoller.getUsers);
router.get("/getUser/:id", userContoller.getUserById);
router.put("/updateUser/:id", userContoller.updateUser);
router.delete("/deleteUser/:id", userContoller.deleteUser);
module.exports = router;
