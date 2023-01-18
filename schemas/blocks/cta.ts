import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'cta',
	title: 'Call To Action',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: "image",
			options: { hotspot: true, },
		}),
		defineField({
			name: 'button',
			title: 'Button',
			type: 'string',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Call To Action'
			}
		},
	}
})
