'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const phone = data?.phone
  const ctaLabel = data?.ctaLabel || 'Book a Free Consultation'
  const ctaUrl = data?.ctaUrl || '/contact'

  return (
    <header {...(theme ? { 'data-theme': theme } : {})}>
      {/* Top bar — phone number */}
      {phone && (
        <div className="bg-[#5c5c99] text-white py-2">
          <div className="container flex justify-center items-center gap-2 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:underline">
              {phone}
            </a>
          </div>
        </div>
      )}

      {/* Main nav bar */}
      <div className="bg-white border-b border-gray-100 relative z-20">
        <div className="container py-3 flex items-center justify-between gap-6">
          <Link href="/" className="flex-shrink-0">
            <Logo loading="eager" priority="high" />
          </Link>
          <HeaderNav data={data} ctaLabel={ctaLabel} ctaUrl={ctaUrl} />
        </div>
      </div>
    </header>
  )
}
