import { create } from 'zustand'

export const useStepStore = create((set) => ({
  currentStep: 1,
  nextStep: null,
  setNextStep: (steps) => set((state) => ({ currentStep: steps })),
}))