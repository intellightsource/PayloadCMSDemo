import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const ServiceHero: Block = {
  slug: 'serviceHero',
  interfaceName: 'ServiceHeroBlock',
  labels: {
    singular: 'Service Hero',
    plural: 'Service Heroes',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Background / Hero Image',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
        label: 'CTA Buttons',
      },
    }),
  ],
}
