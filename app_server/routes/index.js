var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationinfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Get other page. */

router.get('/about', ctrlOthers.about);

module.exports = router;
