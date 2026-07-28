import type { DisasterType } from "./simulationTypes";


export function classifyEvent(
  input: string
): DisasterType {

  const text = input.toLowerCase();


  if (
    text.includes("flood") ||
    text.includes("flooding") ||
    text.includes("water overflow")
  ) {
    return "flood";
  }


  if (
    text.includes("rain") ||
    text.includes("rainfall") ||
    text.includes("storm")
  ) {
    return "rain";
  }


  if (
    text.includes("earthquake") ||
    text.includes("quake")
  ) {
    return "earthquake";
  }


  if (
    text.includes("cyclone") ||
    text.includes("hurricane")
  ) {
    return "cyclone";
  }


  if (
    text.includes("heatwave") ||
    text.includes("extreme heat")
  ) {
    return "heatwave";
  }


  if (
    text.includes("wildfire") ||
    text.includes("forest fire") ||
    text.includes("fire")
  ) {
    return "wildfire";
  }


  return "rain";
}