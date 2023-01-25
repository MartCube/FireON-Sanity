import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'gallery',
	title: 'Gallery',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'list',
			title: 'List',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'image',
					title: 'Image',
					type: "image",
					options: { hotspot: true, },
				})
			]
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
				title: 'Gallery'
			}
		},
	}
})
