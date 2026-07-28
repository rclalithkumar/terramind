import type {
  DisasterType,
  SimulationResult,
} from "./simulationTypes";

import { scenarioProfiles } from "./scenarioProfiles";
import { getLocationModifier } from "./locationModifier";
import { getTimeModifier } from "./timeModifier";


interface ImpactInput {
  event: DisasterType;
  location?: string;
  timeframe?: string;
}


export function calculateImpact(
  input: ImpactInput
): SimulationResult {


  const profile =
    scenarioProfiles[input.event];


  const locationImpact =
    getLocationModifier(
      input.location ?? ""
    );


  const timeImpact =
    getTimeModifier(
      input.timeframe ?? ""
    );


  const probability =
    Math.min(
      95,
      profile.probability +
      locationImpact.riskAdjustment +
      timeImpact.riskAdjustment
    );


  const affectedPopulation =
    Math.round(
      profile.population *
      locationImpact.populationMultiplier
    );


  const estimatedLoss =
    `$${Math.round(
      profile.loss *
      locationImpact.lossMultiplier
    )}M`;



  return {

    title:
      `${profile.title} - ${
        input.location ?? "Unknown Region"
      }`,


    severity:
      profile.severity,


    probability,


    affectedPopulation,


    estimatedLoss,


    timeline:
      profile.timeline,


    recommendations:
      profile.recommendations,

  };
}