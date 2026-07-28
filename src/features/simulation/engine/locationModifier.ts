export interface LocationImpact {
  populationMultiplier: number;
  lossMultiplier: number;
  riskAdjustment: number;
}


export function getLocationModifier(
  location: string
): LocationImpact {

  const city =
    location.toLowerCase();


  if (
    city.includes("mumbai")
  ) {
    return {
      populationMultiplier: 1.5,
      lossMultiplier: 1.4,
      riskAdjustment: 10,
    };
  }


  if (
    city.includes("bengaluru") ||
    city.includes("bangalore")
  ) {
    return {
      populationMultiplier: 1.2,
      lossMultiplier: 1.1,
      riskAdjustment: 5,
    };
  }


  if (
    city.includes("delhi")
  ) {
    return {
      populationMultiplier: 1.4,
      lossMultiplier: 1.3,
      riskAdjustment: 8,
    };
  }


  return {
    populationMultiplier: 1,
    lossMultiplier: 1,
    riskAdjustment: 0,
  };
}