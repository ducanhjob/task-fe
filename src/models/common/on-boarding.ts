export interface FacebookPixelForm {
    pixelTitle: string;
    pixelId: string;
    accessToken: string;
    target: string;
  }
  
  export interface OnboardingState {
    currentStep: number;
    isAppEmbedEnabled: boolean;
    setCurrentStep: (step: number) => void;
    setAppEmbedEnabled: (enabled: boolean) => void;
  }
  
  