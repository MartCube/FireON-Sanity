import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'partners',
	title: 'Partners',
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
					type: "partner",
				})
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Partners'
			}
		},
	}
})
