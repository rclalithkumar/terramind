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
  selectedLocation: string | null;

  isParsing: boolean;
  isSimulating: boolean;

  setScenario: (scenario: string) => void;

  setParsedScenario: (parsed: ParsedScenario | null) => void;

  setSelectedLocation: (location: string | null) => void;

  setParsing: (value: boolean) => void;

  setSimulating: (value: boolean) => void;

  reset: () => void;
}

export const useScenarioStore = create<ScenarioStore>((set) => ({
  scenario: "",
  parsedScenario: null,
  selectedLocation: null,
  isParsing: false,
  isSimulating: false,

  setScenario: (scenario) =>
    set({ scenario }),

  setParsedScenario: (parsedScenario) =>
    set({ parsedScenario }),

  setSelectedLocation: (selectedLocation) =>
  set({ selectedLocation }),

  setParsing: (isParsing) =>
    set({ isParsing }),

  setSimulating: (isSimulating) =>
    set({ isSimulating }),

  reset: () =>
    set({
      scenario: "",
      parsedScenario: null,
      selectedLocation: null,
      isParsing: false,
      isSimulating: false,
    }),
}));