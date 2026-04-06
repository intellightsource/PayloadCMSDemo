import type { GlobalConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'WellForm MD',
    },
    {
      name: 'defaultMetaTitle',
      type: 'text',
      label: 'Default Meta Title',
      admin: {
        description: 'Used as fallback when a page has no custom meta title.',
      },
    },
    {
      name: 'defaultMetaDescription',
      type: 'textarea',
      label: 'Default Meta Description',
      admin: {
        description: 'Used as fallback when a page has no custom meta description.',
      },
    },
    {
      name: 'homepageHero',
      type: 'group',
      label: 'Homepage Hero',
      admin: {
        description: 'Controls the main hero section on the homepage.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Physician-Led Weight Loss Service & Wellness Center in Ankeny',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading (purple uppercase line)',
          defaultValue:
            'Premium Medical Spa, Wellness, and Mental Health Services — All in One Place',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Led by Dr. Patrick Oben, a board-certified obesity doctor, WellForm MD helps you lose weight, reshape your body, and feel your best—inside and out.',
        },
        {
          name: 'primaryCtaLabel',
          type: 'text',
          label: 'Primary CTA Label',
          defaultValue: '$100 OFF GLP-1s',
        },
        {
          name: 'primaryCtaUrl',
          type: 'text',
          label: 'Primary CTA URL',
          defaultValue: '/contact',
        },
        {
          name: 'secondaryCtaLabel',
          type: 'text',
          label: 'Secondary CTA Label',
          defaultValue: 'Free InBody Fat Scan',
        },
        {
          name: 'secondaryCtaUrl',
          type: 'text',
          label: 'Secondary CTA URL',
          defaultValue: '/contact',
        },
        {
          name: 'imageLeft',
          type: 'upload',
          relationTo: 'media',
          label: 'Left Image',
        },
        {
          name: 'imageCenter',
          type: 'upload',
          relationTo: 'media',
          label: 'Center Image',
        },
        {
          name: 'imageRight',
          type: 'upload',
          relationTo: 'media',
          label: 'Right Image',
        },
      ],
    },
    {
      name: 'ga4Id',
      type: 'text',
      label: 'Google Analytics 4 ID',
      admin: {
        description: 'e.g. G-XXXXXXXXXX — leave blank until ready to activate.',
      },
    },
    {
      name: 'facebookPixelId',
      type: 'text',
      label: 'Facebook Pixel ID',
      admin: {
        description: 'Leave blank until ready to activate.',
      },
    },
  ],
}
