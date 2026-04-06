'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

interface HeaderNavProps {
  data: HeaderType
  ctaLabel: string
  ctaUrl: string
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, ctaLabel, ctaUrl }) => {
  const navItems = data?.navItems || []

  return (
    <div className="flex items-center gap-6">
      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map(({ link }, i) => (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="text-sm font-medium text-gray-700 hover:text-[#3d8a7a] transition-colors whitespace-nowrap"
          />
        ))}
        <Link href="/search" aria-label="Search" className="text-gray-600 hover:text-[#3d8a7a] transition-colors">
          <SearchIcon className="w-4 h-4" />
        </Link>
      </nav>

      {/* CTA button */}
      <Link
        href={ctaUrl}
        className="hidden md:inline-flex items-center whitespace-nowrap rounded border-2 border-[#2d6b5e] text-[#2d6b5e] px-4 py-2 text-sm font-semibold hover:bg-[#2d6b5e] hover:text-white transition-colors"
      >
        {ctaLabel}
      </Link>

      {/* Mobile menu placeholder */}
      <button
        type="button"
        className="md:hidden p-2 text-gray-600"
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
