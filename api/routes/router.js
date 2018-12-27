/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/matching', require('./matchingRoutes'));
// router.use('/car', require('./api/carRoutes'));
// router.use('/driver', require('./api/driverRoutes'));

module.exports = router;