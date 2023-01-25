import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'about',
	title: 'About',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: "image",
			options: { hotspot: true, },
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'block',
					title: 'Block',
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
					],
					lists: [{ title: 'Bullet', value: 'bullet' }],
				}),
			],
		})
	],
	preview: {
		prepare() {
			return {
				title: 'About'
			}
		},
	}
})
