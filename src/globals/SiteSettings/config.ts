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
