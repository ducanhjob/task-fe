/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type State = {
  title: string;
  description: string;
  step: number;
  maxSteps: number;
};

type Action = {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setStep: (step: number) => void;
  setMaxSteps: (maxSteps: number) => void;

};

const rootStore = create<State & Action>((set) => ({
  title: "Onboarding",
  description:"We will guide you through setting up Facebook Pixel. Please follow each step in the instructions to ensure a smooth process. You can explore on your own at any time.",
  step: 1,
  maxSteps: 3,
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setStep: (step) => set({ step }),
  setMaxSteps: (maxSteps) => set({ maxSteps }),
}));

export default rootStore;
