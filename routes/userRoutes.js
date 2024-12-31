const router = require('express').Router();
const users = require("../controllers/userController.js");

// Create a new User
router.post("/", users.create);

// Retrieve all Users
router.get("/get", users.findAll);

// Retrieve a single User with id
router.get("/:id", users.findOne);

// Update a User with id
router.post("/:id", users.update);

// Delete a User with id
router.delete("/:id", users.delete);


module.exports = router;
