'use client';

import { Page, Card, Text } from '@shopify/polaris';
import { Step1 } from '../components/onboarding/step-1';
import { Step2 } from '../components/onboarding/step-2';
import { StepComplete } from '../components/onboarding/step-completed';
import { ProgressBar } from '../components/common/progress-bar';
import { Introduction } from '../components/introduction';
import { useOnboardingStore } from '../stores/on-boarding';

export default function Onboarding() {
  const { currentStep, stepsCompleted,totalSteps, setStepCompleted, setCurrentStep} = useOnboardingStore();
  
  const handleStepComplete = (step: number) => {
    setStepCompleted(step);
  };

  const progress = (stepsCompleted.filter(step => step).length / totalSteps) * 100;

  return (
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
          />

          <Step2
            isActive={currentStep === 2}
            isDone={stepsCompleted[1]}
            onComplete={() => handleStepComplete(2)}
            setActiveStep={setCurrentStep}
            isEnabled={stepsCompleted[0]}
          />

          {stepsCompleted[1] && <StepComplete />}
        </div>
      </Card>
    </Page>
  );
}
