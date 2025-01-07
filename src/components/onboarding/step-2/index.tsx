'use client'

import { useState } from 'react'
import {
  Button,
  Collapsible,
  TextField,
  ChoiceList,
  Text,
  Checkbox
} from '@shopify/polaris'

interface Step2Props {
  isActive: boolean;
  isDone: boolean;
  isEnabled: boolean;
  onComplete: () => void;
  setActiveStep: (step: number) => void;
  isOpen: boolean;
  onOpenChange: () => void;
  showToast: (content: string) => void;
}

export function Step2({ 
  isActive, 
  isDone, 
  isEnabled, 
  onComplete, 
  setActiveStep,
  isOpen,
  onOpenChange,
  showToast
}: Step2Props) {
  const [pixelType, setPixelType] = useState(['browser'])
  const [formData, setFormData] = useState({
    title: '',
    pixelId: '',
    accessToken: ''
  })

  const handleWhereToGet = () => {
    showToast("Where can I get it?")
  }

  const handleSubmit = () => {
    onComplete()
    setActiveStep(3)
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ alignItems: 'start', display: 'flex', justifyContent: 'center' }}>
        <Checkbox label="" checked={isDone} onChange={() => {}} />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
          <button
            style={{ 
              background: 'none', 
              border: 'none', 
              width: '100%', 
              textAlign: 'start',
              opacity: isEnabled ? 1 : 0.5,
              cursor: isEnabled ? 'pointer' : 'not-allowed'
            }}
            className="flex items-center justify-between w-full p-4 hover:bg-surface-hovered"
            onClick={() => isEnabled && onOpenChange()}
            disabled={!isEnabled}
          >
            <div className="flex items-center gap-3">
              <Text variant="headingMd" as="span">
                Setup your Facebook Pixel
              </Text>
            </div>
          </button>
        </div>
        <Collapsible open={isOpen && isEnabled} id="step-2-content">
          <div className="p-4 space-y-4">
            <div><span>Facebook Pixel Title</span><span style={{ color: "rgb(252, 16, 16)" }}>(*)</span></div>
            <TextField
              label=" "
              clearButton
              id='FacebookPixelTitle'
              value={formData.title}
              onChange={(value) => setFormData(prev => ({ ...prev, title: value }))}
              autoComplete='off'
              error="Facebook Pixel Title is required"
              helpText="It helps you to do easily management facebook pixel"
            />
            <div style={{ display: 'flex' }}><div style={{ width: '50%' }}><span>Facebook Pixel ID (Dataset ID)</span><span style={{ color: "rgb(252, 16, 16)" }}>(*)</span> </div>
              <div style={{ width: '50%', display: 'flex', justifyContent: 'end' }}><Button variant='plain' onClick={handleWhereToGet}>Where can I get it?</Button></div></div>
            <div className="flex items-end gap-2">
              <TextField
                label=""
                error="Facebook Pixel ID (Dataset ID) is required"
                value={formData.pixelId}
                onChange={(value) => setFormData(prev => ({ ...prev, pixelId: value }))}
                autoComplete='off'
              />
            </div>

            <ChoiceList
              title="Pixel Type"
              choices={[
                { value: 'browser', label: 'Browser' },
                { value: 'conversions', label: 'Conversions API' }
              ]}
              selected={pixelType}
              onChange={setPixelType}
            />

            {pixelType[0] === 'conversions' && (
              <div className="flex items-end gap-2">
                  <div style={{ display: 'flex' }}><div style={{ width: '50%' }}><span>Facebook Pixel Access Token</span><span style={{ color: "rgb(252, 16, 16)" }}>(*)</span> </div>
                  <div style={{ width: '50%', display: 'flex', justifyContent: 'end' }}><Button variant='plain' onClick={handleWhereToGet}>Where can I get it?</Button></div></div>
                <TextField
                  label=""
                  value={formData.accessToken}
                  onChange={(value) => setFormData(prev => ({ ...prev, accessToken: value }))}
                  autoComplete='off'
                  error="Facebook Pixel Access Token is required"
                />
              </div>
            )}

            <Button variant='primary' onClick={handleSubmit}>Next step</Button>
          </div>
        </Collapsible>
      </div>
    </div>
  )
}

