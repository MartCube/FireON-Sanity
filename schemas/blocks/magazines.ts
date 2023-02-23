import { defineField, defineType, defineArrayMember } from 'sanity'

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
		defineField({
			name: 'button',
			title: 'Magazine Card Button',
			type: 'string',
		}),
		defineField({
			name: 'list',
			title: 'Magazine List',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'magazine',
					title: 'Magazine',
					type: 'reference',
					weak: true,
					to: [{ type: 'magazine' }],
					options: {
						disableNew: true,
					},
				})
			],
			validation: Rule => Rule.unique(),
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
