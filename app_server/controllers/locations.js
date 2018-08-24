/* GET home page */
module.exports.homelist = function(req, res){
    res.render('locations-list', { title: 'Home' });
};

/* GET information page */
module.exports.locationinfo = function(req, res){
    res.render('location-info', { title: 'Location info' });
};

/* GET feedback page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', { title: 'Add review' });
};
