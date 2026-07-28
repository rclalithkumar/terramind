export interface TimeImpact {
  riskAdjustment: number;
}


export function getTimeModifier(
  timeframe: string
): TimeImpact {

  const time =
    timeframe.toLowerCase();


  if (
    time.includes("today") ||
    time.includes("tomorrow")
  ) {
    return {
      riskAdjustment: 10,
    };
  }


  if (
    time.includes("next week")
  ) {
    return {
      riskAdjustment: 5,
    };
  }


  return {
    riskAdjustment: 0,
  };
}