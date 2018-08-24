/* GET home page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {
        title: 'Limbus - find a place to work with wifi',
        pageHeader: {
            title: 'Limbus',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and seat? Limbus helps you find places to work when out and about. " +
        "Perhaps with coffee, cake or a pint? Let Limbus help you find place you're looking for.",
        locations: [{
            name: 'Pirate coffee',
            address: '17 Neibuta Street, 690000',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Republic',
            address: '28 Fastovskaya Street, 690005',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: 'Ancup',
            address: '127 Oceanskiy prospect Street, 690005',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '380m'
        }]
    });
};

/* GET information page */
module.exports.locationinfo = function(req, res){
    res.render('location-info', {
        title: 'Pirate coffee',
        pageHeader: {
            title: 'Pirate coffee'
        },
        sidebar: {
            contex: 'is on Limbus because it has accessible wifi and space to sit down with ' +
            'your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review ' +
            'to help other people just like you.'
        },
        location: {
            name: 'Pirate coffee',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Petya Seleznyev',
                rating: 5,
                timestamp: '23 Audust 2018',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Vovan',
                rating: 3,
                timestamp: '23 Audust 2018',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    })
};

/* GET feedback page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Review Pirate coffee on Limbus',
        pageHeader: {
            title: 'Review Pirate coffee'
        }
    });
};
