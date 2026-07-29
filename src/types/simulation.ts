export interface TimelineEvent {

  day: number;

  event: string;

  severity: number;

  impact: string;

}


export interface SimulationTimeline {

  location: string;

  scenario: string;

  events: TimelineEvent[];

}