import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'features',
	title: 'Features',
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
					type: "feature",
				})
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Features'
			}
		},
	}
})
