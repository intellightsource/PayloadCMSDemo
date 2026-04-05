import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      admin: {
        description: 'Displayed in the header, e.g. (555) 123-4567',
      },
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Button Label',
      defaultValue: 'Book a Consultation',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      label: 'CTA Button URL',
      defaultValue: '/contact',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
