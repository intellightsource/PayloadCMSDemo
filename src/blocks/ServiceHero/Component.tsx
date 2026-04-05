import React from 'react'

import type { ServiceHeroBlock as ServiceHeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const ServiceHeroBlock: React.FC<ServiceHeroBlockProps> = ({
  heading,
  subheading,
  media,
  links,
}) => {
  return (
    <section className="relative min-h-[480px] flex items-center bg-gray-900 text-white overflow-hidden">
      {media && typeof media === 'object' && (
        <div className="absolute inset-0 z-0">
          <Media
            resource={media}
            fill
            imgClassName="object-cover opacity-40"
          />
        </div>
      )}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{heading}</h1>
          {subheading && (
            <p className="text-lg md:text-xl text-gray-200 mb-8">{subheading}</p>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => (
                <CMSLink key={i} size="lg" {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
