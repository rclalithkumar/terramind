import type { SimulationResult } from "./simulationTypes";

import { classifyEvent } from "./eventClassifier";
import { calculateImpact } from "./impactCalculator";


export function runSimulation(
  scenario: string
): SimulationResult {

  const event = classifyEvent(scenario);


  const locationMatch =
    scenario.match(
      /in ([a-zA-Z\s]+)/
    );


  const location =
    locationMatch?.[1] ?? "Unknown Region";


  const timeframeMatch =
  scenario.match(
    /(today|tomorrow|next week|next month)/i
  );


const timeframe =
  timeframeMatch?.[0] ?? "unknown";


return calculateImpact({
  event,
  location,
  timeframe,
});
}