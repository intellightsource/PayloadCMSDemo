import React from 'react'

// Renders a JSON-LD <script> tag for structured data.
// Usage: <JsonLd data={schemaObject} />
export const JsonLd: React.FC<{ data: Record<string, unknown> }> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || ''

// LocalBusiness / MedicalBusiness schema for the practice
export function buildLocalBusinessSchema(overrides?: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    name: 'WellForm MD',
    url: SITE_URL,
    ...overrides,
  }
}

// Service schema for individual service pages
export function buildServiceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string
  description?: string | null
  url: string
  image?: string | null
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    ...(description ? { description } : {}),
    url,
    ...(image ? { image } : {}),
    provider: {
      '@type': 'MedicalBusiness',
      name: 'WellForm MD',
      url: SITE_URL,
    },
  }
}
