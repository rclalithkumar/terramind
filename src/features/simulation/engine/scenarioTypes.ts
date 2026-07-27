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

export interface SimulationResult {
  title: string;
  summary: string;
  confidence: number;

  impacts: string[];

  recommendations: string[];

  timeline: string[];
}