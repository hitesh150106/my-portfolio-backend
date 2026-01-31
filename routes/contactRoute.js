const express = require('express');
const router = express.Router();
const { SendMessage } = require('../controllers/contactController');

router.post('/' , SendMessage);

module.exports = router;