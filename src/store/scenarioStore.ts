import { create } from "zustand";

interface ParsedScenario {
  location?: string;
  event?: string;
  timeframe?: string;
  confidence?: number;
}

interface ScenarioStore {
  scenario: string;
  parsedScenario: ParsedScenario | null;

  isParsing: boolean;
  isSimulating: boolean;

  setScenario: (scenario: string) => void;

  setParsedScenario: (parsed: ParsedScenario | null) => void;

  setParsing: (value: boolean) => void;

  setSimulating: (value: boolean) => void;

  reset: () => void;
}

export const useScenarioStore = create<ScenarioStore>((set) => ({
  scenario: "",
  parsedScenario: null,

  isParsing: false,
  isSimulating: false,

  setScenario: (scenario) =>
    set({ scenario }),

  setParsedScenario: (parsedScenario) =>
    set({ parsedScenario }),

  setParsing: (isParsing) =>
    set({ isParsing }),

  setSimulating: (isSimulating) =>
    set({ isSimulating }),

  reset: () =>
    set({
      scenario: "",
      parsedScenario: null,
      isParsing: false,
      isSimulating: false,
    }),
}));