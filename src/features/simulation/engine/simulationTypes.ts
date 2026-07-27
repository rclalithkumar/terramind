export interface SimulationResult {
  title: string;
  severity: "Low" | "Medium" | "High";
  probability: number;
  affectedPopulation: number;
  estimatedLoss: string;
  timeline: string[];
  recommendations: string[];
}