import { create } from 'zustand'

interface OnboardingState {
  totalSteps: number
  currentStep: number
  stepsCompleted: boolean[]
  themeStatus: boolean
  openStep: number
  setStepCompleted: (step: number, completed: boolean) => void
  setCurrentStep: (step: number) => void
  setThemeStatus: (status: boolean) => void
  setOpenStep: (step: number) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  totalSteps: 3,
  currentStep: 1,
  stepsCompleted: [false, false, false],
  themeStatus: false,
  openStep: 1,
  setStepCompleted: (step: number, completed: boolean) =>
    set((state) => ({
      stepsCompleted: state.stepsCompleted.map((status, index) =>
        index === step - 1 ? completed : status
      ),
    })),
  setCurrentStep: (step: number) => set({ currentStep: step }),
  setThemeStatus: (status: boolean) => set({ themeStatus: status }),
  setOpenStep: (step: number) => set({ openStep: step }),
}))