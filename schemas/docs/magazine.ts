import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'magazine',
	title: 'Magazine',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
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
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			description: 'Ukrainian hryvnia'
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'block',
					title: 'Block',
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
					],
					lists: [{ title: 'Bullet', value: 'bullet' }],
				}),
			],
		}),
		defineField({
			name: 'svg',
			title: 'Name as SVG',
			type: 'image',
			options: { hotspot: true, },
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
			description: 'first image is the main'
		}),
		defineField({//	colors
			name: 'colors',
			title: 'Colors',
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
		defineField({//	metaTags
			name: 'metaTags',
			type: 'metaTags',
		}),
	],
	preview: {
		select: {
			title: 'name',
			// media: 'gallery'
		},
		prepare({ title }) {
			return {
				title: `${title}`,
				// media: media[0]
			}
		},
	}
})
