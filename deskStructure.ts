import { StructureBuilder } from 'sanity/desk'
import { RiRecordCircleLine, RiPagesLine } from 'react-icons/ri'



export const structure = (S: StructureBuilder) => S.list()
	.title('Content')
	.items([
		S.listItem()
			.title('App FireON')
			.icon(RiRecordCircleLine)
			.child(
				S.document()
					.schemaType('app')
					.documentId('app')
			),
		S.listItem()
			.title('Landing Page')
			.icon(RiPagesLine)
			.child(
				S.document()
					.schemaType('landingPage')
					.documentId('landingPage')
			),
	])