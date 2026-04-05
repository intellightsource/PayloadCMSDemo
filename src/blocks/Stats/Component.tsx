import React from 'react'

import type { StatsBlock as StatsBlockProps } from '@/payload-types'

export const StatsBlock: React.FC<StatsBlockProps> = ({ heading, items }) => {
  return (
    <div className="container">
      {heading && (
        <h2 className="text-3xl font-bold text-center mb-10">{heading}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(items || []).map((stat, i) => (
          <div key={i} className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
            <div className="font-semibold text-sm uppercase tracking-wide mb-1">{stat.label}</div>
            {stat.description && (
              <div className="text-muted-foreground text-xs">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
