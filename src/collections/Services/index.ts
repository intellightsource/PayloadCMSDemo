import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { slugField } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { revalidateService, revalidateDelete } from './hooks/revalidateService'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

import { ServiceHero } from '@/blocks/ServiceHero/config'
import { RichTextBlock } from '@/blocks/RichTextBlock/config'
import { ImageText } from '@/blocks/ImageText/config'
import { BenefitsList } from '@/blocks/BenefitsList/config'
import { FAQ } from '@/blocks/FAQ/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Stats } from '@/blocks/Stats/config'

const transformationPhaseOptions = [
  { label: 'Assessment', value: 'assessment' },
  { label: 'Treatment', value: 'treatment' },
  { label: 'Maintenance', value: 'maintenance' },
]

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'transformationPhase', '_status', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = `/services/${data?.slug}`
        const serverUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || ''
        return `${serverUrl}${path}`
      },
    },
    preview: (data) => {
      const path = `/services/${data?.slug}`
      const serverUrl =
        process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || ''
      return `${serverUrl}${path}`
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'Used in service listings and cards. Keep under 160 characters.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'service-categories',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'transformationPhase',
      type: 'select',
      options: transformationPhaseOptions,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [ServiceHero, RichTextBlock, ImageText, BenefitsList, FAQ, CallToAction, Stats],
      required: false,
      admin: {
        initCollapsed: false,
      },
    },
    // SEO tab — meta fields added by seoPlugin via plugins/index.ts
    // Slug field
    slugField({
      position: undefined,
    }),
  ],
  hooks: {
    afterChange: [revalidateService],
    afterDelete: [revalidateDelete],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
