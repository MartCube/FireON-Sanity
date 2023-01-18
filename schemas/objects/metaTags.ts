import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'metaTags',
	title: 'Meta Tags',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Meta Title',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'Meta Title FireON'
		}),
		defineField({
			name: 'description',
			title: 'Meta Description',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'Meta Description FireON'
		}),
		defineField({
			name: 'image',
			title: 'Meta Image',
			type: 'image',
			validation: Rule => Rule.required(),
			options: { hotspot: true, },
		}),
	],
	options: {
		collapsible: true,
		collapsed: true,
	},
	preview: {
		prepare() {
			return {
				title: 'Meta Tags'
			}
		},
	}
})
