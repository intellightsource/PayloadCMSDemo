'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, X } from 'lucide-react'

interface HeaderNavProps {
  data: HeaderType
  ctaLabel: string
  ctaUrl: string
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, ctaLabel, ctaUrl }) => {
  const navItems = data?.navItems || []
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-4">
      {/* Desktop nav — only at xl (1280px+) */}
      <nav className="nav-desktop items-center gap-6">
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

      {/* CTA button — only at xl */}
      <Link
        href={ctaUrl}
        className="nav-cta-btn items-center whitespace-nowrap rounded border-2 border-[#2d6b5e] text-[#2d6b5e] px-4 py-2 text-sm font-semibold hover:bg-[#2d6b5e] hover:text-white transition-colors"
      >
        {ctaLabel}
      </Link>

      {/* Hamburger — visible below xl */}
      <button
        type="button"
        className="nav-burger p-2 text-gray-600 hover:text-[#3d8a7a] transition-colors"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-semibold text-gray-800">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-4">
              {navItems.map(({ link }, i) => (
                <div key={i} onClick={() => setOpen(false)}>
                  <CMSLink
                    {...link}
                    appearance="link"
                    className="text-base font-medium text-gray-700 hover:text-[#3d8a7a] transition-colors"
                  />
                </div>
              ))}
              <Link
                href="/search"
                className="flex items-center gap-2 text-base font-medium text-gray-700 hover:text-[#3d8a7a] transition-colors"
                onClick={() => setOpen(false)}
              >
                <SearchIcon className="w-4 h-4" />
                Search
              </Link>
            </nav>

            <div className="px-5 py-5 border-t border-gray-100">
              <Link
                href={ctaUrl}
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded border-2 border-[#2d6b5e] text-[#2d6b5e] px-4 py-2.5 text-sm font-semibold hover:bg-[#2d6b5e] hover:text-white transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
