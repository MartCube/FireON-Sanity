import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'inputField',
	title: 'Input Field',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			title: 'Label',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'label',
		}),
		defineField({
			name: 'placeholder',
			title: 'Placeholder',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: 'Placeholder',
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
