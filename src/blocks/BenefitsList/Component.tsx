import React from 'react'

import type { BenefitsListBlock as BenefitsListBlockProps } from '@/payload-types'

// Simple icon map using unicode/text fallbacks — no extra icon library needed
const iconMap: Record<string, string> = {
  check: '✓',
  star: '★',
  heart: '♥',
  shield: '⊕',
  zap: '⚡',
  clock: '⏱',
}

export const BenefitsListBlock: React.FC<BenefitsListBlockProps> = ({
  heading,
  subheading,
  benefits,
}) => {
  return (
    <div className="container">
      {(heading || subheading) && (
        <div className="text-center mb-10">
          {heading && <h2 className="text-3xl font-bold mb-3">{heading}</h2>}
          {subheading && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subheading}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(benefits || []).map((benefit, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-6 flex gap-4 items-start"
          >
            {benefit.icon && (
              <span className="text-2xl text-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                {iconMap[benefit.icon] || '•'}
              </span>
            )}
            <div>
              <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
              {benefit.description && (
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
