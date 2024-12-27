const express = require('express');
const testControllers = require('../controllers/testControllers');

//router object
const router = express.Router();

//routes GET | POST | PUT | DELETE
router.get('/users', testControllers);
//export router
module.exports = router;