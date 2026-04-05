import type { Metadata } from 'next'
import type { Where } from 'payload'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import Link from 'next/link'

import type { Service, Media as MediaType } from '@/payload-types'

import { Media } from '@/components/Media'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Our Services | WellForm MD',
  description:
    'Explore WellForm MD\'s full range of medical services including weight loss, medical spa, skin care, wellness, and mental health.',
  openGraph: mergeOpenGraph({
    title: 'Our Services | WellForm MD',
    url: '/services',
  }),
}

const queryServices = cache(async (categorySlug?: string) => {
  const payload = await getPayload({ config: configPromise })

  const where: Where = {
    _status: { equals: 'published' },
    ...(categorySlug ? { 'category.slug': { equals: categorySlug } } : {}),
  }

  const result = await payload.find({
    collection: 'services',
    draft: false,
    limit: 100,
    pagination: false,
    overrideAccess: false,
    depth: 2,
    where,
    sort: 'title',
  })

  return result.docs
})

const queryCategories = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'service-categories',
    limit: 50,
    pagination: false,
    overrideAccess: false,
    sort: 'title',
  })
  return result.docs
})

type Args = {
  searchParams: Promise<{ category?: string }>
}

export default async function ServicesPage({ searchParams }: Args) {
  const { category: categorySlug } = await searchParams
  const [services, categories] = await Promise.all([
    queryServices(categorySlug),
    queryCategories(),
  ])

  return (
    <article className="pt-16 pb-24">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Personalized medical care to help you look and feel your best — from weight management
            to aesthetic treatments and wellness programs.
          </p>
        </div>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/services"
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                !categorySlug
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:bg-muted'
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/services?category=${cat.slug}`}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  categorySlug === cat.slug
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-muted'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        {/* Services grid */}
        {services.length === 0 ? (
          <p className="text-muted-foreground">
            No services found{categorySlug ? ' in this category' : ''}.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const category =
    service.category && typeof service.category === 'object' ? service.category : null

  const heroImage =
    service.heroImage && typeof service.heroImage === 'object'
      ? (service.heroImage as MediaType)
      : null

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        {heroImage ? (
          <Media resource={heroImage} fill imgClassName="object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            No image
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        {category && (
          <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            {category.title}
          </span>
        )}
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h2>
        {service.excerpt && (
          <p className="text-muted-foreground text-sm flex-1">{service.excerpt}</p>
        )}
        <span className="mt-4 text-sm font-medium text-primary">Learn more →</span>
      </div>
    </Link>
  )
}
