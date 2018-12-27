/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const MatchinController = require('../controller/matchingController');
const matchingCtrl = new MatchinController();


router.get('/', (req, res) => {
    res.send('hello from matching router tu');
});




module.exports = router;