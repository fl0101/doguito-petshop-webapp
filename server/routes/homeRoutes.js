const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/view/home.html'))
})

module.exports = router;