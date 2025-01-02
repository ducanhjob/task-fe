import React from 'react'
import { Button, Card, Icon, Text } from '@shopify/polaris'
import { CheckIcon } from '@shopify/polaris-icons'
import { useOnboardingStore } from '../../../stores/on-boarding/'

export function AppEmbedStep( ) {
  const { isAppEmbedEnabled, setAppEmbedEnabled } = useOnboardingStore()

  const handleEnableLater = () => {
    // Handle enable later logic
  }

  const handleNextStep = () => {
    setAppEmbedEnabled(true)
  }

  return (
    <Card>
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          {isAppEmbedEnabled && (
            <Icon source={CheckIcon}  />
          )}
          <Text variant="headingMd" as="h3">
            Enable our App Embed
          </Text>
        </div>

        {!isAppEmbedEnabled && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Text as="p">1. Go to your theme editor by clicking this button</Text>
              <Button onClick={() => window.open('#', '_blank')}>Open theme</Button>
            </div>

            <div className="space-y-2">
              <Text as="p">2. Click on the Save button on the top right corner.</Text>
              <Text as="p" variant="bodySm">
                <a href="#" className="text-blue-600 hover:underline">
                  View instructions
                </a>
              </Text>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleEnableLater}>Enable Later</Button>
              <Button onClick={handleNextStep}>
                Next step
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

