const db = require('../config/db');

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Save user to database
  async save() {
    try {
      const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      const [result] = await db.execute(sql, [this.username, this.email, this.password]);
      return result.insertId;
    } catch (error) {
      throw new Error('Failed to create user: ' + error.message);
    }
  }

  // Get user by ID
  static async findById(id) {
    try {
      const sql = 'SELECT * FROM users WHERE id = ?';
      const [rows] = await db.execute(sql, [id]);
      return rows[0];
    } catch (error) {
      throw new Error('Failed to find user: ' + error.message);
    }
  }

  // Get user by email
  static async findByEmail(email) {
    try {
      const sql = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await db.execute(sql, [email]);
      return rows[0];
    } catch (error) {
      throw new Error('Failed to find user: ' + error.message);
    }
  }

  // Update user
  async update(id) {
    try {
      const sql = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
      const [result] = await db.execute(sql, [this.username, this.email, this.password, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message);
    }
  }

  // Delete user
  static async delete(id) {
    try {
      const sql = 'DELETE FROM users WHERE id = ?';
      const [result] = await db.execute(sql, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message);
    }
  }
}

module.exports = User;