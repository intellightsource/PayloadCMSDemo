import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const BenefitsList: Block = {
  slug: 'benefitsList',
  interfaceName: 'BenefitsListBlock',
  labels: {
    singular: 'Benefits List',
    plural: 'Benefits Lists',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
    },
    {
      name: 'benefits',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon (optional)',
          options: [
            { label: 'Check', value: 'check' },
            { label: 'Star', value: 'star' },
            { label: 'Heart', value: 'heart' },
            { label: 'Shield', value: 'shield' },
            { label: 'Zap', value: 'zap' },
            { label: 'Clock', value: 'clock' },
          ],
        },
      ],
    },
  ],
}
