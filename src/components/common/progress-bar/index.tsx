import { ProgressBar as PolarisProgressBar, Text } from '@shopify/polaris'

interface ProgressBarProps {
  value: number
  stepsCompleted: number
  totalSteps: number
}

export function ProgressBar({ value, stepsCompleted, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3 space-y-2" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
       <Text as="p" variant="bodyMd" tone="subdued">
        {stepsCompleted} of {totalSteps} steps completed
      </Text>
      <div style={{flex: 1}}>
      <PolarisProgressBar progress={value} tone='primary' size='small'/>
      </div>
    </div>
  )
}

