import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'app',
	title: 'App FireON',
	type: 'document',
	fields: [
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
		}),
		defineField({
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [],
		}),
		defineField({
			name: 'smedias',
			title: 'Social Medias',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'smedias',
					title: 'Social Medias',
					type: 'object',
					fields: [
						defineField({
							name: 'name',
							title: 'Name',
							type: 'string',
						}),
						defineField({
							name: 'icon',
							title: 'Icon',
							type: 'string',
							description: 'link to icon base',
						}),
						defineField({
							name: 'link',
							title: 'Link',
							type: 'url',
						}),
					]
				})
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'App FireON'
			}
		},
	}
})
