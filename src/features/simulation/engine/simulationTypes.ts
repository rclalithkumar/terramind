export type DisasterType =
  | "rain"
  | "flood"
  | "cyclone"
  | "earthquake"
  | "heatwave"
  | "wildfire";

export interface SimulationScenario {
  location: string;
  event: DisasterType;
  timeframe: string;
  intensity?: number;
}

export interface TimelineStep {
  day: number;
  event: string;
  severity: "Low" | "Medium" | "High";
  impact: number;
}

export interface SimulationResult {
  title: string;

  severity: "Low" | "Medium" | "High";

  probability: number;

  affectedPopulation: number;

  estimatedLoss: string;

  timeline: TimelineStep[];

  recommendations: string[];
}