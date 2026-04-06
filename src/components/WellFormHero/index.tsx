import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { Media } from '@/payload-types'

interface WellFormHeroProps {
  heading: string
  subheading: string
  description: string
  primaryCtaLabel: string
  primaryCtaUrl: string
  secondaryCtaLabel: string
  secondaryCtaUrl: string
  imageLeft?: Media | null
  imageCenter?: Media | null
  imageRight?: Media | null
}

const DEFAULTS: WellFormHeroProps = {
  heading: 'Physician-Led Weight Loss Service & Wellness Center in Ankeny',
  subheading: 'Premium Medical Spa, Wellness, and Mental Health Services — All in One Place',
  description:
    'Led by Dr. Patrick Oben, a board-certified obesity doctor, WellForm MD helps you lose weight, reshape your body, and feel your best—inside and out.',
  primaryCtaLabel: '$100 OFF GLP-1s',
  primaryCtaUrl: '/contact',
  secondaryCtaLabel: 'Free InBody Fat Scan',
  secondaryCtaUrl: '/contact',
}

const FALLBACK_IMAGES = {
  left: '/assets/wellform-md-weight-loss-ankeny-hero-woman-weight-loss-woman-happy.webp',
  center: '/assets/wellform-md-weight-loss-ankeny-hero-man-166x300.webp',
  right: '/assets/wellform-md-weight-loss-ankeny-hero-woman-weight-loss.webp',
}

function imgSrc(media: Media | null | undefined, fallback: string): string {
  return media && typeof media === 'object' && media.url ? media.url : fallback
}

const CARD_BG = 'bg-[#8b82bf]'

export const WellFormHero: React.FC<Partial<WellFormHeroProps>> = (props) => {
  const {
    heading,
    subheading,
    description,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    imageLeft,
    imageCenter,
    imageRight,
  } = { ...DEFAULTS, ...props }

  return (
    <section className="bg-[#f0f2f5]">
      <div className="container py-8 lg:py-6 flex flex-col lg:flex-row gap-10 lg:gap-10 xl:gap-20 items-center">

        {/* ── Left: text ── */}
        <div className="flex-1 min-w-0 max-w-[470px]">
          <h1 className="font-extrabold leading-tight text-[#2E7E7F] mb-[15px]" style={{ fontSize: '42px' }}>
            {heading}
          </h1>

          <p className="text-sm font-extrabold uppercase tracking-wide text-[#5c5c99] mb-5">
            {subheading}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-lg">
            {description}
          </p>

          <div className="flex flex-row gap-4">
            <Link
              href={primaryCtaUrl}
              className="px-6 py-3 bg-[#2d8a7a] text-white font-semibold rounded text-sm whitespace-nowrap hover:bg-[#246b5e] transition-colors"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href={secondaryCtaUrl}
              className="px-6 py-3 border-2 border-[#2d8a7a] text-[#2d8a7a] font-semibold rounded text-sm whitespace-nowrap hover:bg-[#2d8a7a] hover:text-white transition-colors"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>

        {/* ── Right: image collage ── */}
        <div className="flex-1 w-full max-w-[520px] lg:max-w-none">

          {/* Social proof badge */}
          <div className="mb-3 inline-flex bg-white rounded-2xl shadow-lg px-4 py-3 items-center gap-3">
            <div className="flex -space-x-2 flex-shrink-0">
              {(['#b8aad8', '#c8b8e8', '#a898c8'] as const).map((bg, n) => (
                <div
                  key={n}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold overflow-hidden"
                  style={{ background: bg }}
                >
                  {n + 1}
                </div>
              ))}
            </div>
            <div>
              <div className="font-extrabold text-gray-800 text-sm leading-tight">180+</div>
              <div className="text-[#5c5c99] text-xs font-medium">Satisfied customers</div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-400 ml-1">4.95 Review</span>
              </div>
            </div>
          </div>

          {/* 3-column image row */}
          <div className="flex gap-3 items-end" style={{ height: 380 }}>

            {/* Col 1 — shorter (mt-auto + fixed height) */}
            <div className="flex-1 flex flex-col gap-3" style={{ height: '85%' }}>
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src={imgSrc(imageLeft, FALLBACK_IMAGES.left)}
                  alt="Weight loss transformation"
                  fill
                  sizes="(max-width: 768px) 33vw, 180px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Col 2 — tallest, with badge below */}
            <div className="flex-1 flex flex-col gap-3" style={{ height: '100%' }}>
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src={imgSrc(imageCenter, FALLBACK_IMAGES.center)}
                  alt="Wellness transformation"
                  fill
                  sizes="(max-width: 768px) 33vw, 180px"
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-[#1a2744] text-white rounded-2xl px-3 py-3 flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs font-semibold leading-snug">
                  No strict diets.<br />No intense workouts.
                </div>
              </div>
            </div>

            {/* Col 3 — shorter */}
            <div className="flex-1 flex flex-col gap-3" style={{ height: '85%' }}>
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src={imgSrc(imageRight, FALLBACK_IMAGES.right)}
                  alt="Happy patient"
                  fill
                  sizes="(max-width: 768px) 33vw, 180px"
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
