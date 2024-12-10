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
		defineField({// name
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required().lowercase(),
			description: 'UID'
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
				defineArrayMember({
					name: 'youtube',
					title: 'Youtube',
					type: 'object',
					fields: [
						defineField({
							name: 'id',
							title: 'Video ID',
							type: 'string',
							validation: Rule => Rule.required()
						})
					],
					preview: {
						prepare() {
							return {
								title: 'Youtube Video'
							}
						},
					}
				}),
			],
		}),
		defineField({//colorMagazines
			name: 'colorMagazines',
			title: 'Color Magazines',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'colorMagazine',
					title: 'Color Magazine',
					type: 'object',
					fields: [
						defineField({// color
							name: 'color',
							title: 'Color',
							type: 'string',
						}),
						defineField({// gallery
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
							]
						}),
						defineField({// price
							name: 'price',
							title: 'Price',
							type: 'number',
							description: 'Ukrainian hryvnia'
						}),
						defineField({// sku number
							name: 'sku',
							title: 'sku number',
							type: 'number',
							description: 'sku number'
						}),
						defineField({// price
							name: 'isProductActive',
							title: 'Is product available',
							type: 'boolean',
							initialValue: false,
							description: 'Is product available'
						}),
					],
					preview: {
						select: {
							color: 'color',
						},
						prepare(selection) {
							const { color } = selection
							return {
								title: `${color}`,
							}
						},
					}
				})
			],
		}),
		defineField({//	metaTags
			name: 'metaTags',
			type: 'metaTags',
		}),
		defineField({//	colorTitle
			name: 'colorTitle',
			title: 'Color Title',
			type: 'string',
			description: 'Pick your color'
		}),
		defineField({//	button
			name: 'button',
			title: 'Button',
			type: 'string',
			description: 'Add To Basket'
		}),
		defineField({// logo
			name: 'home_image',
			title: 'Image for the home page',
			type: 'image',
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
