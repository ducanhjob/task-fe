import { create } from 'zustand'

interface OnboardingState {
  totalSteps: number
  currentStep: number
  stepsCompleted: boolean[]
  themeStatus: boolean
  setStepCompleted: (step: number) => void
  setCurrentStep: (step: number) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  totalSteps: 3,
  currentStep: 1,
  stepsCompleted: [false, false],
  themeStatus: false,
  setStepCompleted: (step: number) =>
    set((state) => ({
      stepsCompleted: state.stepsCompleted.map((completed, index) =>
        index === step - 1 ? true : completed
      ),
    })),
  setCurrentStep: (step: number) => set({ currentStep: step }),
}))

