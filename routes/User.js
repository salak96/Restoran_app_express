const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/post', getUsers);
router.get('/users', getUsers);
router.get('/users/:id', getUsers);
router.put('/users/:id', getUsers);
router.delete('/users/:id', getUsers);


module.exports = router;