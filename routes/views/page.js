var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	console.log("page view...");

	// Set locals
	locals.section = 'page';
	locals.filters = {
		pagename: req.params.pagename,
	};
	locals.data = {
		page: [],
	};

	// Load the current post
	// view.on('init', function (next) {

	// 	var q = keystone.list('page').model.findOne({
	// 		status: 'published',
	// 		slug: locals.filters.page,
	// 	});

	// 	q.exec(function (err, result) {
	// 		console.log(result);
	// 		locals.data.page = result;
	// 		next(err);
	// 	});

	// });

	// Load other pages
	view.on('init', function (next) {

		var q = keystone.list('page').model.find().where('status', 'published');

		q.exec(function (err, results) {
			locals.data.page = results;
			next(err);
		});

	});

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.pagename) {
			keystone.list('page').model.findOne({ title: locals.filters.pagename }).exec(function (err, result) {
				locals.data.page = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Render the view
	view.render('page');
};
