var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slider Model
 * ==========
 */

var Slider = new keystone.List('slider', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Slider.add({
	title: { type: String, required: true },
	description: { type: String},
	sliderImage: { type: Types.CloudinaryImage },
	buttonTitle: { type: String},
	buttonLink: { type: String},
});

Slider.defaultColumns = 'title|20%, description|20%, buttonTitle|20%, buttonLink|20%, sliderImage|20%';

Slider.register();
