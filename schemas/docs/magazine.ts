import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'magazine',
	title: 'Magazine',
	type: 'document',
	i18n: true,
	fields: [
		defineField({// svg name
			name: 'svg',
			title: 'Name as SVG',
			type: 'image',
			options: { hotspot: true, },
		}),
		defineField({// name UID
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required().lowercase(),
			description: 'UID'
		}),
		defineField({//	gallery
			name: 'gallery',
			title: 'Gallery',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'image',
					title: 'Image',
					type: 'image',
					options: { hotspot: true, },
				})
			],
			validation: Rule => Rule.unique(),
			description: 'first image is the main',
		}),
		defineField({// info
			name: 'info',
			title: 'Info',
			type: 'object',
			fields: [
				defineField({
					name: 'size',
					title: 'Size',
					type: 'string',
				}),
				defineField({
					name: 'rem',
					title: 'REM',
					type: 'string',
				}),
				defineField({
					name: 'blk',
					title: 'BLK',
					type: 'string',
				}),
			],
			options: {
				collapsible: true,
				collapsed: true,
			},
		}),
		defineField({// price
			name: 'price',
			title: 'Price',
			type: 'number',
			description: 'Ukrainian hryvnia'
		}),
		defineField({//description
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'block',
					title: 'Block',
					type: 'block',
					styles: [
						{ title: 'Title', value: 'h4' },
						{ title: 'Normal', value: 'normal' },
					],
					lists: [{ title: 'Bullet', value: 'bullet' }],
				}),
			],
		}),
		defineField({//	colors
			name: 'colors',
			title: 'Colors',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'list',
					title: 'List',
					type: 'array',
					of: [
						defineArrayMember({
							name: 'color',
							title: 'Color',
							type: 'reference',
							weak: true,
							to: [{ type: 'color' }],
							options: {
								disableNew: true,
							},
						})
					],
					validation: Rule => Rule.unique(),
				}),
			],
			options: {
				collapsible: true,
				collapsed: true,
			},
		}),
		defineField({//	metaTags
			name: 'metaTags',
			type: 'metaTags',
		}),
		defineField({//	button
			name: 'button',
			title: 'Button',
			type: 'string',
			description: 'Add To Basket'
		}),
	],
	preview: {
		select: {
			name: 'name',
			lang: '__i18n_lang'
		},
		prepare(selection) {
			const { name, lang } = selection
			return {
				title: name,
				subtitle: `${lang}`
			}
		},
	}
})
