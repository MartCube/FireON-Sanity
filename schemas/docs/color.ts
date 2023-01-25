import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'color',
	title: 'Color',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'hexcode',
			title: 'Hex Code',
			type: 'string',
			description: 'example: D6AE21'
		}),
	],
	preview: {
		select: {
			name: 'name',
		},
		prepare({ name }) {
			return {
				title: `${name}`
			}
		},
	}
})
