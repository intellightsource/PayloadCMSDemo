import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const isPriority = priorityFromProps === 'high'

  return (
    <Image
      src="/wellform-md-logo.png"
      alt="WellForm MD — Weight Loss & Wellness"
      width={220}
      height={60}
      loading={loading}
      priority={isPriority}
      className={clsx('h-auto w-auto max-h-15', className)}
    />
  )
}
