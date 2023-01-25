import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contact',
	title: 'Contact',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true, },
		}),
		defineField({
			name: 'form',
			title: 'Contact Form',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'name',
					title: 'Name',
					type: 'inputField',
				}),
				defineField({
					name: 'phone',
					title: 'Phone',
					type: 'inputField',
				}),
				defineField({
					name: 'message',
					title: 'Message',
					type: 'inputField',
				}),
				defineField({
					name: 'button',
					title: 'Button',
					type: 'string',
				}),
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Contact'
			}
		},
	}
})
