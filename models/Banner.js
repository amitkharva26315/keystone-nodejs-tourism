var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * ==========
 */

var Banner = new keystone.List('banner', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Banner.add({
	title: { type: String, required: true },
	title2: { type: String},
	title3: { type: String},
	subSectionTitle: { type: String },
	subSectionDescription: { type: String },
	bannerImage: { type: Types.CloudinaryImage },	
});

Banner.defaultColumns = 'title|20%, title2|20%, title3|20%, subSectionTitle|20%, bannerImage|20%';

Banner.register();
