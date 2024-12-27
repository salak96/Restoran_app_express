const router = require('express').Router();
const users = require("../controllers/userController.js");

// Create a new User
router.post("/userss", users.create);

module.exports = router;
