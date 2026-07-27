export interface ParsedScenario {
  location?: string;
  event?: string;
  timeframe?: string;
  confidence: number;
}

const locations = [
  "bengaluru",
  "bangalore",
  "mumbai",
  "delhi",
  "chennai",
  "hyderabad",
  "kolkata",
  "new york",
  "tokyo",
  "london",
];

const events = [
  "flood",
  "rain",
  "rainfall",
  "earthquake",
  "fire",
  "cyclone",
  "tsunami",
  "heatwave",
];

const timeframes = [
  "today",
  "tomorrow",
  "next week",
  "next month",
];

export function parseScenario(input: string): ParsedScenario {
  const text = input.toLowerCase();

  const location = locations.find((l) => text.includes(l));

  const event = events.find((e) => text.includes(e));

  const timeframe = timeframes.find((t) => text.includes(t));

  let confidence = 40;

  if (location) confidence += 20;
  if (event) confidence += 20;
  if (timeframe) confidence += 20;

  return {
    location,
    event,
    timeframe,
    confidence,
  };
}