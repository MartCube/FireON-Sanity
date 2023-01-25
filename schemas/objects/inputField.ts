import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'inputField',
	title: 'Input Field',
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
			description: 'ID Field',
		}),
		defineField({
			name: 'label',
			title: 'Label',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'placeholder',
			title: 'Placeholder',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
	],
	options: {
		collapsible: true,
		collapsed: true,
	},
	preview: {
		prepare() {
			return {
				title: 'Input Field',
			}
		},
	}
})
