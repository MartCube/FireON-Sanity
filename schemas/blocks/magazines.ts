import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'magazines',
	title: 'Magazines',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Magazines'
			}
		},
	}
})
