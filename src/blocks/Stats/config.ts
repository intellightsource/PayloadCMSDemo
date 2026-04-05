import type { Block } from 'payload'

export const Stats: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlock',
  labels: {
    singular: 'Stats',
    plural: 'Stats Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading (optional)',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Stat Value',
          admin: {
            description: 'e.g. "500+" or "98%" or "12 Years"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Stat Label',
          admin: {
            description: 'e.g. "Patients Served" or "Satisfaction Rate"',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Optional Detail',
        },
      ],
    },
  ],
}
