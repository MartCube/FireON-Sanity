import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'techSpec',
	title: 'Technical Specification',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'string',
			validation: Rule => Rule.required(),
			description: 'link to icon set'
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
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
