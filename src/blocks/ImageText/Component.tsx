import React from 'react'

import type { ImageTextBlock as ImageTextBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  image,
  imagePosition,
  content,
  links,
}) => {
  const isImageLeft = imagePosition !== 'right'

  return (
    <div className="container">
      <div
        className={`flex flex-col gap-8 md:gap-12 items-center ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {image && typeof image === 'object' && (
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <Media resource={image} fill imgClassName="object-cover" />
          </div>
        )}
        <div className="w-full md:w-1/2">
          {content && <RichText data={content} enableGutter={false} />}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-6">
              {links.map(({ link }, i) => (
                <CMSLink key={i} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
