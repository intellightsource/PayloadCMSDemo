import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { BenefitsListBlock } from '@/blocks/BenefitsList/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { ImageTextBlock } from '@/blocks/ImageText/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { RichTextBlockComponent } from '@/blocks/RichTextBlock/Component'
import { ServiceHeroBlock } from '@/blocks/ServiceHero/Component'
import { StatsBlock } from '@/blocks/Stats/Component'

const blockComponents = {
  archive: ArchiveBlock,
  benefitsList: BenefitsListBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  faq: FAQBlock,
  formBlock: FormBlock,
  imageText: ImageTextBlock,
  mediaBlock: MediaBlock,
  richTextBlock: RichTextBlockComponent,
  serviceHero: ServiceHeroBlock,
  stats: StatsBlock,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyBlock = any

export const RenderBlocks: React.FC<{
  blocks: AnyBlock[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              const isFullWidth = blockType === 'serviceHero'
              return (
                <div className={isFullWidth ? '' : 'my-16'} key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
