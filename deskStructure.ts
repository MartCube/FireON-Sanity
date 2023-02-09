import { StructureBuilder } from 'sanity/desk'



export const structure = (S: StructureBuilder) => S.list()
	.title('Content')
	.items([
		...S.documentTypeListItems().filter(
			listItem => !['media.tag'].includes(listItem.getId() ?? '')
		)
	])