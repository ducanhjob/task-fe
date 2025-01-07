'use client';

import { useState, useCallback } from 'react';
import { Page, Card, Frame, Toast } from '@shopify/polaris';
import { Step1 } from '../components/onboarding/step-1';
import { Step2 } from '../components/onboarding/step-2';
import { StepComplete } from '../components/onboarding/step-completed';
import { ProgressBar } from '../components/common/progress-bar';
import { Introduction } from '../components/introduction';
import { useOnboardingStore } from '../stores/on-boarding';

export default function Onboarding() {
  const { 
    currentStep, 
    stepsCompleted, 
    totalSteps, 
    openStep,
    setStepCompleted, 
    setCurrentStep,
    setOpenStep,
    themeStatus,
    setThemeStatus
  } = useOnboardingStore();
  const [toastProps, setToastProps] = useState({ content: '', active: false });
  
  const handleStepComplete = (step: number) => {
    setStepCompleted(step, true);
    if (step === 1) {
      setOpenStep(2); // Open Step 2 when Step 1 is completed
    } else if (step === 2) {
      setOpenStep(3); // Open StepComplete when Step 2 is completed
    }
  };

  const handleStepOpen = (step: number) => {
    if (step === 2 && !stepsCompleted[0]) {
      return;
    }
    if (step === 3 && (!stepsCompleted[0] || !stepsCompleted[1])) {
      return;
    }
    setOpenStep(step);
  };

  const showToast = useCallback((content: string) => {
    setToastProps({ content, active: true });
  }, []);

  const dismissToast = useCallback(() => {
    setToastProps({ content: '', active: false });
  }, []);

  const progress = (stepsCompleted.filter(step => step).length / totalSteps) * 100;

  return (
    <Frame>
      <Page title="Onboarding">
        <Card>
          <Introduction />
          <ProgressBar totalSteps={3} stepsCompleted={stepsCompleted.filter(step => step).length} value={progress} />
          <hr />
          <div className="space-y-4">
            <Step1
              isActive={currentStep === 1}
              isDone={stepsCompleted[0]}
              onComplete={() => handleStepComplete(1)}
              setActiveStep={setCurrentStep}
              isOpen={openStep === 1}
              onOpenChange={() => handleStepOpen(1)}
              showToast={showToast}
              themeStatus={themeStatus}
              setThemeStatus={setThemeStatus}
            />

            <Step2
              isActive={currentStep === 2}
              isDone={stepsCompleted[1]}
              onComplete={() => handleStepComplete(2)}
              setActiveStep={setCurrentStep}
              isEnabled={stepsCompleted[0]}
              isOpen={openStep === 2}
              onOpenChange={() => handleStepOpen(2)}
              showToast={showToast}
            />

            <StepComplete 
              showToast={showToast} 
              isOpen={openStep === 3}
              onOpenChange={() => handleStepOpen(3)}
              isCompleted={stepsCompleted[2]}
            />
          </div>
        </Card>
      </Page>
      {toastProps.active && (
        <Toast content={toastProps.content} onDismiss={dismissToast} />
      )}
    </Frame>
  );
}

