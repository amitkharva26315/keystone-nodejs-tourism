var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'innerpage';
	locals.data = {
		banner: [],
		slider: [],
		cards: [],
	};
	// locals.data = {
	// 	pages: [],
	// 	pagescategory: [],
	// };
	// Load the current category filter
	// view.on('init', function (next) {
	// 	keystone.list('PageCategory').model.find({})
	// 		.exec(function (err, result) {
	// 			locals.data.pagescategory = result;
	// 			next(err);
	// 		});
	// });

	// view.on('init', function (next) {
	// 	keystone.list('pages').model.find({})
	// 		.exec(function (err, result) {
	// 			locals.data.pages = result;
	// 			next(err);
	// 		});
	// });

	view.on('init', function (next) {
		keystone.list('banner').model.find({})
			.exec(function (err, result) {
				locals.data.banner = result;
				next(err);
			});
	});

	view.on('init', function (next) {
		keystone.list('slider').model.find({})
			.exec(function (err, result) {
				locals.data.slider = result;
				next(err);
			});
	});
	
	view.on('init', function (next) {
		keystone.list('cards').model.find({})
			.exec(function (err, result) {
				locals.data.cards = result;
				next(err);
			});
	});

	// Render the view
	view.render('innerpage');
};
