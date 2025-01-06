'use client';

import { useState, useCallback } from 'react';
import { Button, Collapsible, Text, Icon, Checkbox, Toast, Box, Frame } from '@shopify/polaris';
import { AlertCircleIcon, ExternalIcon } from '@shopify/polaris-icons';
import ModalStep1 from './modal/index';  // Import ModalStep1 component

// Step1 component
interface Step1Props {
  isActive: boolean;
  isDone: boolean;
  onComplete: () => void;
  setActiveStep: (step: number) => void;
}

export function Step1({ isActive, isDone, onComplete, setActiveStep }: Step1Props) {
  const [isOpen, setIsOpen] = useState(isActive);
  const [themeStatus, setThemeStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [modalActive, setModalActive] = useState(false);  // State for modal

  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    []
  );

  const handleOpenTheme = () => {
    setActive((active) => !active);  // Show toast on click
  };

  const handleViewInstructions = () => {
    setModalActive(true);  // Open modal when clicking "View instructions"
  };

  const handleCloseModal = () => {
    setModalActive(false);  // Close modal
  };

  const handleNextStep = () => {
    setThemeStatus(true);
  };
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} />
  ) : null;
  const handleEnableLater = () => {
    onComplete();
    setActiveStep(2);
    setIsOpen(false);
    handleChange(true);
  };

  return (
    <Box>
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
                  Enable our App Embed
                </Text>
              </div>
            </button>
            <Collapsible open={isOpen} id="step-1-content">
              {themeStatus && (
                <div style={{ display: 'flex' }} className="alert-critical">
                  <Icon source={AlertCircleIcon} />
                  <Text variant="bodyMd" tone="critical" as="p">
                    App Embed isn't activated
                  </Text>
                </div>
              )}
              <div style={{ display: 'flex' }}>
                <div className="p-4 space-y-4" >
                  <div>
                    <div className="space-y-2" style={{ display: 'flex', gap: '0.5rem' }}>
                      <Text variant="bodyMd" as="p">
                        1. Go to your theme editor by clicking this button
                      </Text>
                      <Button onClick={handleOpenTheme} icon={ExternalIcon}>Open theme</Button> {/* Show toast on click */}
                    </div>
                    <div className="space-y-2">
                      <Text variant="bodyMd" as="p">
                        2. Click on the Save button on the top right corner.
                      </Text>
                      <div className="flex gap-3 pt-4" style={{ padding: '0px 0px 5px 5px', display: 'flex' }}>
                        <Button variant="plain" onClick={handleViewInstructions}>
                          View instructions
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4" style={{ gap: '0.5rem', display: 'flex' }}>
                      <Button onClick={handleEnableLater}>Enable Later</Button>
                      <Button variant="primary" onClick={handleNextStep}>
                        Next step
                      </Button>
                    </div>
                  </div>
                </div>
                <img src="https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/preview-banner-app-embed.04f4ccf6fb67dc6a61043f425af51090.svg" />

              </div>
            </Collapsible>
          </div>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <Frame>
          {toastMarkup}
        </Frame>
        <ModalStep1 active={modalActive} handleChange={handleCloseModal} />
      </div>
    </Box>
  );
}
