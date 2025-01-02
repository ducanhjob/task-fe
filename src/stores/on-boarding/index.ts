import { create } from 'zustand'
import { OnboardingState } from '../../models/common/on-boarding'

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  isAppEmbedEnabled:  ,
  setCurrentStep: (step) => set({ currentStep: step }),
  setAppEmbedEnabled: (enabled) => set({ isAppEmbedEnabled: enabled })
}))

