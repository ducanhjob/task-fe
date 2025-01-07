'use client'

import { Button, Card, Text, Icon, Collapsible, Checkbox } from '@shopify/polaris'
import { CheckCircleIcon } from '@shopify/polaris-icons'

interface StepCompleteProps {
  showToast: (content: string) => void;
  isOpen: boolean;
  onOpenChange: () => void;
  isCompleted: boolean;
}

export function StepComplete({ showToast, isOpen, onOpenChange, isCompleted }: StepCompleteProps) {
  const handleInstallHelper = () => {
    showToast('Install The Facebook Pixel Helper here')
  }

  const handleCreateAnother = () => {
    showToast('Create another pixel')
  }

  const handleManagePixels = () => {
    showToast('Manage pixels')
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ alignItems: 'start', display: 'flex', justifyContent: 'center' }}>
        <Checkbox label="" checked={isCompleted} onChange={() => {}} />
      </div>
      <div style={{ width: '100%' }}>
        <button
          style={{ background: 'none', border: 'none', width: '100%', textAlign: 'start' }}
          className="flex items-center justify-between w-full p-4 hover:bg-surface-hovered"
          onClick={onOpenChange}
        >
          <div className="flex items-center gap-3">
            <Text variant="headingMd" as="span">
              Setup Complete
            </Text>
          </div>
        </button>
        <Collapsible open={isOpen} id="step-complete-content">
          <Card>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: 'var(--p-color-bg-success-subdued)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <Icon source={CheckCircleIcon} />
              </div>
              <Text variant="headingLg" as="h2">Setup Complete!</Text>
              <Text variant="bodyMd" as="p">
                Your Facebook Pixel has been successfully set up
              </Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
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
        </Collapsible>
      </div>
    </div>
  )
}

