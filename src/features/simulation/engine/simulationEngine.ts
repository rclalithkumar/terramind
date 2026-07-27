import type { SimulationResult } from "./simulationTypes";

export function runSimulation(
  scenario: string
): SimulationResult {

  const text = scenario.toLowerCase();

  if (text.includes("rain")) {
    return {
      title: "Heavy Rainfall",
      severity: "Medium",
      probability: 82,
      affectedPopulation: 350000,
      estimatedLoss: "$18M",
      timeline: [
        "Rain begins",
        "Water accumulation",
        "Traffic congestion",
        "Localized flooding"
      ],
      recommendations: [
        "Issue public alerts",
        "Deploy drainage teams",
        "Avoid low-lying roads"
      ]
    };
  }

  if (text.includes("flood")) {
    return {
      title: "Flood Scenario",
      severity: "High",
      probability: 91,
      affectedPopulation: 820000,
      estimatedLoss: "$140M",
      timeline: [
        "River overflow",
        "Urban flooding",
        "Power disruption",
        "Recovery begins"
      ],
      recommendations: [
        "Evacuate affected zones",
        "Open emergency shelters",
        "Suspend public transport"
      ]
    };
  }

  return {
    title: "Generic Simulation",
    severity: "Low",
    probability: 40,
    affectedPopulation: 5000,
    estimatedLoss: "$1M",
    timeline: [
      "Monitoring",
      "Assessment",
      "Response"
    ],
    recommendations: [
      "Continue monitoring"
    ]
  };
} 