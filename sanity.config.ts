import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { structure } from './deskStructure'

export default defineConfig({
	name: 'default',
	title: 'FireON',

	projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.SANITY_STUDIO_DATASET,

	plugins: [
		deskTool({ structure: structure }),
		media(),
		visionTool(),
	],

	form: {
		image: {
			assetSources: () => [mediaAssetSource],
			directUploads: true,
		}
	},

	schema: {
		types: schemaTypes
	},

})
