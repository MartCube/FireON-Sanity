import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'link',
	title: 'Link',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'hashtag',
			title: 'Hashtag',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `${title}`,
			}
		},
	}
})
