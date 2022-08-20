const express = require('express');
const {indexView } = require('../controller/indexController');
const router = express.Router();
router.get('/', indexView);
module.exports = router;