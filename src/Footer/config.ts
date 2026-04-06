import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidateFooter'

const columnLinksField = (name: string, label: string) => ({
  name,
  type: 'array' as const,
  label,
  maxRows: 10,
  admin: {
    initCollapsed: true,
  },
  fields: [
    {
      name: 'label',
      type: 'text' as const,
      required: true,
    },
    {
      name: 'url',
      type: 'text' as const,
      required: true,
    },
    {
      name: 'newTab',
      type: 'checkbox' as const,
      label: 'Open in new tab',
    },
  ],
})

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hours',
      type: 'text',
      label: 'Business Hours',
      defaultValue: 'Mon - Fri: 8am - 5pm | Sat: 9am - 5pm | Sun: Closed',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Business Address',
      defaultValue: '2675 N Ankeny Blvd Suite 113, Ankeny, IA 50023',
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue:
        '© 2026 Wellform MD - Weight Loss & Wellness. Powered By WelForge. All rights reserved.',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      maxRows: 8,
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'Twitter / X', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    columnLinksField('col1Links', 'Column 1 Links'),
    columnLinksField('col2Links', 'Column 2 Links'),
    columnLinksField('col3Links', 'Column 3 Links'),
    columnLinksField('col4Links', 'Column 4 Links'),
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
