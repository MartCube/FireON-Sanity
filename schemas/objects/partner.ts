import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'partner',
	title: 'Partner',
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true, },
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'url',
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image'
		},
		prepare({ title, media }) {
			return {
				title: `${title}`,
				media: media
			}
		},
	}
})
