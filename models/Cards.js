var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Cards Model
 * ==========
 */

var Cards = new keystone.List('cards', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cards.add({
	title: { type: String, required: true },
	description: { type: String },	
	cardImage: { type: Types.CloudinaryImage },
	cardSize: { type: Types.Select, options: '1:1,2:1', default: '1:1', index: true, required: true },
	Link: { type: String },
});

Cards.defaultColumns = 'title|20%, description|20%, cardImage|20%, cardSize|20%, Link|20%';

Cards.register();
