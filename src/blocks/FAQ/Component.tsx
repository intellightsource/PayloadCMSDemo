'use client'

import React, { useState } from 'react'

import type { FAQBlock as FAQBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'

export const FAQBlock: React.FC<FAQBlockProps> = ({ heading, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        {heading && <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>}
        <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
          {(items || []).map((item, i) => (
            <div key={i}>
              <button
                type="button"
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium">{item.question}</span>
                <span
                  className="text-muted-foreground flex-shrink-0 transition-transform"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none' }}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {openIndex === i && item.answer && (
                <div className="px-6 pb-5 pt-1 text-muted-foreground">
                  <RichText data={item.answer} enableGutter={false} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
