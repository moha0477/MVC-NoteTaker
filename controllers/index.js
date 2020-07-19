const router = require("express").Router();
const notesRoutes = require('./notesController');

router.use('/notes', notesRoutes)

module.exports = router;
