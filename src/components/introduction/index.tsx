import React from 'react'
import { ProgressBar, Text } from '@shopify/polaris'

interface IntroductionProps {
  currentStep: number
  totalSteps: number
}

export function Introduction({ currentStep, totalSteps }: IntroductionProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Text variant="headingLg" as="h2">
            <span>Seamlessly integrate<img 
                src="https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/line.b1e8ee4c9a79176536c8498db6056423.svg"
                alt="line" 
                className="absolute top-0 right-0"
                aria-hidden="true"
              /></span>
            <span className="relative">
              your Facebook Pixel
            </span>
            <span> in </span>
            <span className="relative inline-flex items-center px-2 py-1 rounded-full bg-teal-100 text-teal-700">
              a single step
              <img 
                src="https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/circle.fd8c02571a0b67ff452d24fe477fa3ab.svg" 
                alt="circle" 
                className="absolute -top-4 right-0"
                aria-hidden="true"
              />
            </span>
          </Text>
        </div>
        <Text variant="bodySm" as="p">
          We will guide you through setting up Facebook Pixel. Please follow each step in the instructions to ensure a smooth process. You can explore on your own at any time.
        </Text>
      </div>

      <div className="py-4">
        <Text as="p" variant="bodySm" >
          {currentStep} of {totalSteps} steps completed
        </Text>
        <ProgressBar progress={progress} size="small" />
      </div>
    </div>
  )
}

