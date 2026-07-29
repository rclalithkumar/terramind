import { create } from "zustand";
import type { SimulationResult } from "@/features/simulation/engine/simulationTypes";
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

  simulationResult: SimulationResult | null;
  timelineProgress: number;

setTimelineProgress: (progress: number) => void;

setSimulationResult: (
  result: SimulationResult | null
) => void;

  isParsing: boolean;
  isSimulating: boolean;

  setScenario: (scenario: string) => void;

  setParsedScenario: (parsed: ParsedScenario | null) => void;

  setSelectedLocation: (location: string | null) => void;

  setParsing: (value: boolean) => void;

  setSimulating: (value: boolean) => void;
  
  currentTimelineStep: number;

isTimelinePlaying: boolean;

setCurrentTimelineStep: (step: number) => void;

setTimelinePlaying: (playing: boolean) => void;

  reset: () => void;
}

export const useScenarioStore = create<ScenarioStore>((set) => ({
  scenario: "",
  parsedScenario: null,
  selectedLocation: null,
  simulationResult: null,
  isParsing: false,
  isSimulating: false,
  currentTimelineStep: 0,
  timelineProgress: 0,
isTimelinePlaying: false,

  setScenario: (scenario) =>
    set({ scenario }),

  setParsedScenario: (parsedScenario) =>
    set({ parsedScenario }),

  setSelectedLocation: (selectedLocation) =>
  set({ selectedLocation }),

  setSimulationResult: (simulationResult) =>
  set({ simulationResult }),

  setTimelineProgress: (timelineProgress) =>
  set({ timelineProgress }),

  setParsing: (isParsing) =>
    set({ isParsing }),

  setSimulating: (isSimulating) =>
    set({ isSimulating }),

  setCurrentTimelineStep: (currentTimelineStep) =>
  set({ currentTimelineStep }),

setTimelinePlaying: (isTimelinePlaying) =>
  set({ isTimelinePlaying }),

  reset: () =>
    set({
      scenario: "",
      parsedScenario: null,
      selectedLocation: null,
      simulationResult: null,
      isParsing: false,
      isSimulating: false,
      currentTimelineStep: 0,
      isTimelinePlaying: false,
      timelineProgress: 0,
    }),
}));