import type { DisasterType } from "./simulationTypes";


interface ScenarioProfile {
  title: string;
  severity: "Low" | "Medium" | "High";
  probability: number;
  population: number;
  loss: number;
  timeline: string[];
  recommendations: string[];
}


export const scenarioProfiles: Record<
  DisasterType,
  ScenarioProfile
> = {

  flood: {
    title: "Flood Scenario",
    severity: "High",
    probability: 85,
    population: 500000,
    loss: 120,

    timeline: [
      "Heavy rainfall begins",
      "Water levels rise",
      "Urban areas affected",
      "Emergency response activated",
    ],

    recommendations: [
      "Monitor water levels",
      "Prepare evacuation routes",
      "Deploy rescue teams",
    ],
  },


  rain: {
    title: "Heavy Rainfall",
    severity: "Medium",
    probability: 75,
    population: 150000,
    loss: 40,

    timeline: [
      "Rainfall increases",
      "Drainage pressure rises",
      "Traffic disruption occurs",
    ],

    recommendations: [
      "Issue weather alerts",
      "Monitor drainage systems",
    ],
  },


  earthquake: {
    title: "Earthquake Scenario",
    severity: "High",
    probability: 65,
    population: 200000,
    loss: 250,

    timeline: [
      "Seismic activity detected",
      "Structural assessment begins",
      "Recovery operations start",
    ],

    recommendations: [
      "Inspect buildings",
      "Deploy rescue teams",
      "Prepare medical support",
    ],
  },


  wildfire: {
    title: "Wildfire Scenario",
    severity: "Medium",
    probability: 70,
    population: 75000,
    loss: 80,

    timeline: [
      "Fire ignition detected",
      "Fire spreads with wind",
      "Evacuation begins",
    ],

    recommendations: [
      "Monitor fire boundaries",
      "Issue evacuation alerts",
    ],
  },


  cyclone: {
    title: "Cyclone Scenario",
    severity: "High",
    probability: 80,
    population: 400000,
    loss: 180,

    timeline: [
      "Storm formation",
      "Wind intensity increases",
      "Coastal impact begins",
    ],

    recommendations: [
      "Secure coastal areas",
      "Prepare shelters",
    ],
  },


  heatwave: {
    title: "Heatwave Scenario",
    severity: "Medium",
    probability: 75,
    population: 300000,
    loss: 60,

    timeline: [
      "Temperature rises",
      "Heat stress increases",
      "Health risks emerge",
    ],

    recommendations: [
      "Open cooling centers",
      "Issue health advisories",
    ],
  },

};