'use client'

import { useState,useCallback } from 'react'
import { toast } from 'sonner'
import { 
  Button, 
  Collapsible, 
  TextField, 
  ChoiceList,
  Text,
  Icon,
  Checkbox
} from '@shopify/polaris'
import {} from '@shopify/polaris-icons'

interface Step2Props {
  isActive: boolean
  isDone: boolean
  isEnabled: boolean
  onComplete: () => void
  setActiveStep: (step: number) => void
}

export function Step2({ isActive, isDone, isEnabled, onComplete, setActiveStep }: Step2Props) {
  const [isOpen, setIsOpen] = useState(isActive)
  const [pixelType, setPixelType] = useState(['browser'])
  const [formData, setFormData] = useState({
    title: '',
    pixelId: '',
    accessToken: ''
  })
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    []
  );
  const handleWhereToGet = () => {
    toast.info('Where can I get it?')
  }

  const handleSubmit = () => {
    if (!formData.title || !formData.pixelId || (pixelType[0] === 'conversions' && !formData.accessToken)) {
      toast.error('Please fill in all required fields')
      return
    }

    onComplete()
    setIsOpen(false)
  }

  return (
   <div style={{ display: 'flex' }}>
           <div style={{ alignItems: 'start', display: 'flex', justifyContent: 'center' }}>
             <Checkbox label="" checked={checked}  />
           </div>
           <div style={{ display: 'flex', width: '100%' }}>
             <div style={{ width: '100%' }}>
               <button
                 style={{ background: 'none', border: 'none', width: '100%', textAlign: 'start' }}
                 className="flex items-center justify-between w-full p-4 hover:bg-surface-hovered"
                 onClick={() => setIsOpen(!isOpen)}
               >
                 <div className="flex items-center gap-3">
                   <Text variant="headingMd" as="span">
                     Setup your Facebook Pixel
                   </Text>
                 </div>
               </button>
              </div>
      <Collapsible open={isOpen} id="step-2-content">
        <div className="p-4 space-y-4">
          <TextField
            label="Facebook Pixel Title"
            value={formData.title}
            onChange={(value) => setFormData(prev => ({ ...prev, title: value }))}
            autoComplete='off'
            helpText="It helps you to do easily management facebook pixel"
          />

          <div className="flex items-end gap-2">
            <TextField
              label="Facebook Pixel ID (Dataset ID)"
              value={formData.pixelId}
              onChange={(value) => setFormData(prev => ({ ...prev, pixelId: value }))}
              autoComplete='off'
            />
            <Button  onClick={handleWhereToGet}>Where can I get it?</Button>
          </div>

          <ChoiceList
            title="Pixel Type"
            choices={[
              {value: 'browser', label: 'Browser'},
              {value: 'conversions', label: 'Conversions API'}
            ]}
            selected={pixelType}
            onChange={setPixelType}
          />

          {pixelType[0] === 'conversions' && (
            <div className="flex items-end gap-2">
              <TextField
                label="Facebook Pixel Access Token"
                value={formData.accessToken}
                onChange={(value) => setFormData(prev => ({ ...prev, accessToken: value }))}
                autoComplete='off'
              />
              <Button  onClick={handleWhereToGet}>Where can I get it?</Button>
            </div>
          )}

          <Button  onClick={handleSubmit}>Next step</Button>
        </div>
      </Collapsible>
    </div>
    </div>
  )
}

