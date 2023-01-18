import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'techSpecs',
	title: 'Technical Specifications',
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
					type: "techSpec",
				})
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Technical Specifications'
			}
		},
	}
})
