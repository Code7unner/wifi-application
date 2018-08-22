/* GET home page */
module.exports.homelist = function(req, res){
    res.render('index', { title: 'Home' });
};

/* GET information page */
module.exports.locationinfo = function(req, res){
    res.render('index', { title: 'Location info' });
};

/* GET feedback page */
module.exports.addReview = function(req, res){
    res.render('index', { title: 'Add review' });
};
