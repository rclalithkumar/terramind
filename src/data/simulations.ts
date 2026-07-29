import type { SimulationTimeline } from "../types/simulation";


export const FLOOD_SIMULATION: SimulationTimeline = {

  location: "Bengaluru",

  scenario: "Urban Flood",

  events: [

    {
      day: 1,
      event: "Heavy rainfall begins",
      severity: 30,
      impact: "Water accumulation starts"
    },

    {
      day: 3,
      event: "Drainage overflow",
      severity: 60,
      impact: "Low lying areas affected"
    },

    {
      day: 7,
      event: "Flood peak",
      severity: 95,
      impact: "Major infrastructure impact"
    },

    {
      day: 14,
      event: "Recovery phase",
      severity: 40,
      impact: "Water levels decreasing"
    }

  ]

};