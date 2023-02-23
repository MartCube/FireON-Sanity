import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'basket',
	title: 'Basket',
	type: 'document',
	i18n: true,
	fields: [
		defineField({// title
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({// totalSum
			name: 'totalSum',
			title: 'Total Sum',
			type: 'string',
		}),
		defineField({// emptyBasketMsg
			name: 'emptyBasketMsg',
			title: 'Empty Basket message',
			type: 'string',
		}),
		defineField({// form
			name: 'form',
			title: 'Checkout Form',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'place',
					title: 'Place',
					type: 'inputField',
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
					name: 'comment',
					title: 'Comment',
					type: 'inputField',
				}),
				defineField({
					name: 'button',
					title: 'Button',
					type: 'string',
				}),

			],
			options: {
				collapsible: true,
				collapsed: true,
			},
		}),
		defineField({// success
			name: 'success',
			title: 'Success Response',
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
			],
			options: {
				collapsible: true,
				collapsed: true,
			},
		}),
	],
	preview: {
		select: {
			lang: '__i18n_lang'
		},
		prepare(selection) {
			const { lang } = selection
			return {
				title: "Basket",
				subtitle: `${lang}`
			}
		},
	}
})
