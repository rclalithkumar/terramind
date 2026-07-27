import type {
  SimulationScenario,
  SimulationResult,
} from "./scenarioTypes";

export async function simulateScenario(
  scenario: SimulationScenario
): Promise<SimulationResult> {

  await new Promise((r) => setTimeout(r, 1800));

  return {
    title: `${scenario.event} Simulation`,

    summary:
      `Simulated impact for ${scenario.location}.`,

    confidence: 94,

    impacts: [
      "Urban flooding expected",
      "Traffic disruption",
      "Power outage risk",
    ],

    recommendations: [
      "Deploy emergency teams",
      "Issue public warning",
      "Monitor drainage systems",
    ],

    timeline: [
      "Hour 0",
      "Hour 6",
      "Hour 12",
      "Hour 24",
    ],
  };
}