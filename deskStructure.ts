import { StructureBuilder } from 'sanity/desk'
import { RiRecordCircleLine } from 'react-icons/ri'



export const structure = (S: StructureBuilder) => S.list()
	.title('Content')
	.items([
		S.listItem()
			.title('App')
			.icon(RiRecordCircleLine)
			.child(
				S.document()
					.schemaType('app')
					.documentId('app')
			),
		...S.documentTypeListItems().filter(
			listItem => !['app', 'media.tag'].includes(listItem.getId() ?? '')
		)
	])