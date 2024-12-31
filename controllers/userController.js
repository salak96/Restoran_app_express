const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    // Create a User
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };

    // Save User in database
    const data = await User.create(user);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  }
};