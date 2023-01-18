import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'intro',
	title: 'Intro',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'button',
			title: 'Button',
			type: 'string',
		}),
		defineField({
			name: 'magazine',
			title: 'Magazine Image',
			type: 'image',
			options: { hotspot: true, },
		}),
		// defineField({
		// 	name: 'bg',
		// 	title: 'Background Image',
		// 	type: 'image',
		// 	options: { hotspot: true, },
		// }),
	],
	preview: {
		prepare() {
			return {
				title: 'Intro'
			}
		},
	}
})
