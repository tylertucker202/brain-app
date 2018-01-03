var express = require('express');
var router = express.Router();
var brain_slicer_controller = require('../controllers/brainSlicerController');

/* GET users listing. */
router.get('/', brain_slicer_controller.slicer);

router.get('/ten', brain_slicer_controller.get_ten_points)

module.exports = router;
