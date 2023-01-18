import { defineArrayMember, defineType } from 'sanity'


export default defineType({
	name: 'content',
	title: 'Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'intro',
		}),
		defineArrayMember({
			type: 'about',
		}),
		defineArrayMember({
			type: 'gallery',
		}),
		defineArrayMember({
			type: 'partners',
		}),
		defineArrayMember({
			type: 'contact',
		}),
		defineArrayMember({
			type: 'techSpecs',
		}),

		defineArrayMember({
			type: 'magazines',
		}),
		defineArrayMember({
			type: 'features',
		}),
		defineArrayMember({
			type: 'cta',
		}),
	],
})
