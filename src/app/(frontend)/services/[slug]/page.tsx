import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'

import type { Service, Media as MediaType } from '@/payload-types'
import type { Where } from 'payload'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { JsonLd, buildServiceSchema, buildLocalBusinessSchema } from '@/components/JsonLd'
import { generateMeta } from '@/utilities/generateMeta'
import { getServerSideURL } from '@/utilities/getURL'
import { PayloadRedirects } from '@/components/PayloadRedirects'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
  })

  return (services.docs || [])
    .filter((doc): doc is Service & { slug: string } => Boolean(doc.slug))
    .map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise
  const url = `/services/${slug}`

  const service = await queryServiceBySlug({ slug, draft })

  if (!service) {
    return <PayloadRedirects url={url} />
  }

  const siteUrl = getServerSideURL()
  const heroImage =
    service.heroImage && typeof service.heroImage === 'object'
      ? (service.heroImage as MediaType)
      : null

  const imageUrl = heroImage?.url ? `${siteUrl}${heroImage.url}` : undefined

  return (
    <article>
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      {/* JSON-LD structured data */}
      <JsonLd
        data={buildServiceSchema({
          name: service.title,
          description: service.excerpt,
          url: `${siteUrl}${url}`,
          image: imageUrl,
        })}
      />
      <JsonLd data={buildLocalBusinessSchema()} />

      {/* Block-driven content */}
      {service.layout && service.layout.length > 0 ? (
        <div className="pb-24">
          <RenderBlocks blocks={service.layout} />
        </div>
      ) : (
        // Fallback when no blocks are defined yet
        <div className="container pt-20 pb-24">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          {service.excerpt && (
            <p className="text-muted-foreground text-lg max-w-2xl">{service.excerpt}</p>
          )}
        </div>
      )}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const service = await queryServiceBySlug({ slug, draft: false })

  if (!service) return {}

  // Services use the same meta structure as Pages/Posts via seoPlugin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return generateMeta({ doc: service as any })
}

const queryServiceBySlug = cache(async ({ slug, draft }: { slug: string; draft: boolean }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    depth: 3,
    where: {
      slug: { equals: slug },
    } satisfies Where,
  })

  return (result.docs?.[0] as Service) || null
})
