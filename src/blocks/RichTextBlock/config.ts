import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const RichTextBlock: Block = {
  slug: 'richTextBlock',
  interfaceName: 'RichTextBlock',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: false,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      required: true,
    },
  ],
}
