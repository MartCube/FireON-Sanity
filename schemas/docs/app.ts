import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'app',
	title: 'App',
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
			of: [
				defineArrayMember({
					type: 'link',
				})
			],
			validation: Rule => Rule.unique(),
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
						}),
						defineField({
							name: 'link',
							title: 'Link',
							type: 'url',
						}),
					]
				})
			],
			validation: Rule => Rule.unique(),
		}),
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
				title: 'App FireON'
			}
		},
	}
})
