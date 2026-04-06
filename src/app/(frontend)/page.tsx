import type { Metadata } from 'next'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import { WellFormHero } from '@/components/WellFormHero'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  title: 'WellForm MD | Physician-Led Weight Loss & Wellness Center in Ankeny',
  description:
    'Led by Dr. Patrick Oben, WellForm MD offers medical weight loss, GLP-1 programs, medical spa, skin care, and wellness services in Ankeny, Iowa.',
  openGraph: mergeOpenGraph({
    title: 'WellForm MD | Physician-Led Weight Loss & Wellness Center in Ankeny',
    url: '/',
  }),
}

const queryCategories = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'service-categories',
    limit: 10,
    pagination: false,
    overrideAccess: false,
    sort: 'title',
  })
  return result.docs
})

export default async function HomePage() {
  const [categories, siteSettings] = await Promise.all([
    queryCategories(),
    getCachedGlobal('site-settings', 1)(),
  ])

  const settings = siteSettings as import('@/payload-types').SiteSetting
  const hero = settings?.homepageHero

  return (
    <>
      <WellFormHero
        heading={hero?.heading ?? undefined}
        subheading={hero?.subheading ?? undefined}
        description={hero?.description ?? undefined}
        primaryCtaLabel={hero?.primaryCtaLabel ?? undefined}
        primaryCtaUrl={hero?.primaryCtaUrl ?? undefined}
        secondaryCtaLabel={hero?.secondaryCtaLabel ?? undefined}
        secondaryCtaUrl={hero?.secondaryCtaUrl ?? undefined}
        imageLeft={typeof hero?.imageLeft === 'object' ? hero.imageLeft : null}
        imageCenter={typeof hero?.imageCenter === 'object' ? hero.imageCenter : null}
        imageRight={typeof hero?.imageRight === 'object' ? hero.imageRight : null}
      />

      {/* Service categories grid */}
      {categories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#1e5c4a] mb-3">Our Services</h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Comprehensive care designed around your goals — from weight loss to aesthetics and total
              wellness.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services?category=${cat.slug}`}
                  className="group flex flex-col items-center text-center p-5 rounded-xl border border-border hover:border-[#2d8a7a] hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e8f4f1] group-hover:bg-[#2d8a7a] flex items-center justify-center mb-3 transition-colors">
                    <svg
                      className="w-6 h-6 text-[#2d8a7a] group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1e5c4a] transition-colors">
                    {cat.title}
                  </span>
                  {cat.description && (
                    <span className="text-xs text-gray-500 mt-1 line-clamp-2">{cat.description}</span>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d8a7a] text-white font-semibold rounded text-sm hover:bg-[#246b5e] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
