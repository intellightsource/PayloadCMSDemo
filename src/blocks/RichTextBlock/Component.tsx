import React from 'react'

import type { RichTextBlock as RichTextBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'

export const RichTextBlockComponent: React.FC<RichTextBlockProps> = ({ content }) => {
  if (!content) return null
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <RichText data={content} enableGutter={false} />
      </div>
    </div>
  )
}
