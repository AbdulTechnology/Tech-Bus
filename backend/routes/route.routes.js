const express = require('express');
const { getAvailableRoutes } = require('../controllers/route.controller');
const router = express.Router();

router.get('/search', getAvailableRoutes);

module.exports = router;
