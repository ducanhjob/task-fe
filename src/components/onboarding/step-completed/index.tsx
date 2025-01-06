'use client'

import { toast } from 'sonner'
import { Button, Card, Text, Icon } from '@shopify/polaris'
import { CalculatorIcon } from '@shopify/polaris-icons'

export function StepComplete() {
  const handleInstallHelper = () => {
    toast.info('Install The Facebook Pixel Helper here')
  }

  const handleCreateAnother = () => {
    toast.info('Create another pixel')
  }

  const handleManagePixels = () => {
    toast.info('Manage pixels')
  }

  return (
    <Card>
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto">
            <Icon source={CalculatorIcon} />
          </div>
          <Text variant="headingLg" as="h2">Setup Complete!</Text>
          <Text variant="bodyMd" as="p">
            Your Facebook Pixel has been successfully set up
          </Text>
        </div>
        <div className="space-y-3">
          <Button fullWidth onClick={handleInstallHelper}>
            Install The Facebook Pixel Helper here
          </Button>
          <Button fullWidth onClick={handleCreateAnother}>
            Create another pixel
          </Button>
          <Button fullWidth onClick={handleManagePixels}>
            Manage pixels
          </Button>
        </div>
    </Card>
  )
}

