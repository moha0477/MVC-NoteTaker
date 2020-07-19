const path = require('path');
const express = require('express');
const router = express.Router();

 // Route that sends user to the notes page 
 router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

 // Route that sends user to the homepage
 router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;