const db = require("../models");
const User = db.users;
const ErrorResponse = require("../utils/errorResponse");

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    const { username, email, password } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({
      where: {
        [db.Sequelize.Op.or]: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).send({
        message: "Username or email already exists."
      });
    }

    // Create a User
    const user = {
      username: username,
      email: email,
      password: password
    };

    // Save User in the database
    const data = await User.create(user);
    res.send(data);
  } catch (err) {
    // Log error and send error response
    console.error(err);
    const error = new ErrorResponse(err.message, 500);
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User."
    });
  }
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (err) {
    // Log error and send error response
    console.error(err);
    const error = new ErrorResponse(err.message, 500);
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving users."
    });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findByPk(id);
    if (!data) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.send(data);
    }
  } catch (err) {
    // Log error and send error response
    console.error(err);
    const error = new ErrorResponse(err.message, 500);
    res.status(500).send({
      message: error.message || "Error retrieving User with id=" + id
    });
  }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.update(req.body, {
      where: { id: id }
    });
    if (data == 1) {
      res.send({
        message: "User was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
      });
    }
  }
  catch (err) {
    // Log error and send error response
    console.error(err);
    const error = new ErrorResponse(err.message, 500);
    res.status(500).send({
      message: error.message || "Error updating User with id=" + id
    });
  }
}

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.destroy({
      where: { id: id }
    });
    if (data == 1) {
      res.send({
        message: "User was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${id}. Maybe User was not found!`
      });
    }
  }
  catch (err) {
    // Log error and send error response
    console.error(err);
    const error = new ErrorResponse(err.message, 500);
    res.status(500).send({
      message: error.message || "Could not delete User with id=" + id
    });

  }
}