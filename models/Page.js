var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Page.add({
	title: { type: String, required: true },
	status: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	image: { type: Types.CloudinaryImage },
	categories: { type: Types.Relationship, ref: 'PageCategory', many: true },	
});

// Page.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Page.defaultColumns = 'title, status|20%';
Page.register();
