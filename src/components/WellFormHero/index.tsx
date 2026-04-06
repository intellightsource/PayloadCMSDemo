import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CARD_BG = 'bg-[#8b82bf]'

export const WellFormHero: React.FC = () => {
  return (
    <section className="bg-[#f0f2f5] overflow-hidden">
      <div className="container py-4 lg:py-4 flex flex-col lg:flex-row gap-10 lg:gap-36 items-center">

        {/* ── Left: text ── */}
        <div className="flex-1 max-w-[470px]">
          <h1 className="font-extrabold leading-tight text-[#2E7E7F] mb-[15px]" style={{ fontSize: '42px' }}>
            Physician-Led Weight Loss Service &amp; Wellness Center in Ankeny
          </h1>

          <p className="text-sm font-extrabold uppercase tracking-wide text-[#5c5c99] mb-5">
            Premium Medical Spa, Wellness, and Mental Health Services&nbsp;—&nbsp;All in One Place
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-lg">
            Led by Dr. Patrick Oben, a board-certified obesity doctor, WellForm MD helps you lose
            weight, reshape your body, and feel your best&mdash;inside and out.
          </p>

          <div className="flex flex-row gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#2d8a7a] text-white font-semibold rounded text-sm whitespace-nowrap hover:bg-[#246b5e] transition-colors"
            >
              $100 OFF GLP-1s
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-[#2d8a7a] text-[#2d8a7a] font-semibold rounded text-sm whitespace-nowrap hover:bg-[#2d8a7a] hover:text-white transition-colors"
            >
              Free InBody Fat Scan
            </Link>
          </div>
        </div>

        {/* ── Right: image collage ── */}
        <div className="flex-1 relative w-full max-w-[560px]" style={{ height: 480 }}>

          {/* Social proof badge — top-left */}
          <div className="absolute top-0 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3" style={{ left: '-66px' }}>
            <div className="flex -space-x-2 flex-shrink-0">
              {['#b8aad8', '#c8b8e8', '#a898c8'].map((bg, n) => (
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

          {/* Image collage: 3 flex columns.
               Centre column (man + badge) starts at the top of the padded area.
               Left and right columns have pt-8 so they begin lower — giving the
               centre card the "elevated" look that matches the design. */}
          <div className="absolute inset-0 flex gap-3 pt-16">

            {/* Col 1: Woman — starts lower (pt-8) */}
            <div className="flex-1 flex flex-col pt-8">
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src="/assets/wellform-md-weight-loss-ankeny-hero-woman-weight-loss-woman-happy.webp"
                  alt="Weight loss transformation"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Col 2: Man (top) + badge (bottom) — starts at the top */}
            <div className="flex-1 flex flex-col gap-3">
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src="/assets/wellform-md-weight-loss-ankeny-hero-man-166x300.webp"
                  alt="Wellness transformation"
                  fill
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

            {/* Col 3: Happy woman — starts lower (pt-8) */}
            <div className="flex-1 flex flex-col pt-8">
              <div className={`relative rounded-3xl overflow-hidden ${CARD_BG} flex-1`}>
                <Image
                  src="/assets/wellform-md-weight-loss-ankeny-hero-woman-weight-loss.webp"
                  alt="Happy patient"
                  fill
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
