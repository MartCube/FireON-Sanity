import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'landingPage',
	title: 'Landing Page',
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			title: 'Content',
			type: 'content',
		}),
		defineField({
			name: 'metaTags',
			type: 'metaTags',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Landing Page',
			}
		},
	}
})
