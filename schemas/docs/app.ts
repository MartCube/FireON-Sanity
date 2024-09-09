import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'app',
	title: 'App',
	type: 'document',
	i18n: true,
	fields: [
		defineField({// logo
			name: 'logo',
			title: 'Logo',
			type: 'image',
		}),
		defineField({// product gallery bg
			name: 'productGalleryBg',
			title: 'Product Gallery Background',
			type: 'image',
		}),
		defineField({// content
			name: 'content',
			title: 'Content',
			type: 'content',
		}),
		defineField({// links
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
		defineField({// smedias
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
		defineField({// metaTags
			name: 'metaTags',
			type: 'metaTags',
		}),
	],
	preview: {
		select: {
			lang: '__i18n_lang'
		},
		prepare(selection) {
			const { lang } = selection
			return {
				title: "FireOn",
				subtitle: `${lang}`
			}
		},
	}
})
