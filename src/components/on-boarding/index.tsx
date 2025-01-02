import React from 'react'
import { Page, Layout } from '@shopify/polaris'
import { Introduction } from '../introduction'
import { AppEmbedStep } from '../steps/app-embed-step'
import { FacebookPixelStep } from '../steps/facebook-pixel-step'
import { useOnboardingStore } from '../../stores/on-boarding'

export function Onboarding() {
  const { currentStep, isAppEmbedEnabled } = useOnboardingStore()
  const totalSteps = 3

  return (
    <Page title="Onboarding">
      <Layout>
        <Layout.Section>
          <div className="space-y-6">
            <Introduction currentStep={currentStep} totalSteps={totalSteps} />
            <AppEmbedStep />
            <FacebookPixelStep isEnabled={isAppEmbedEnabled} />
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

