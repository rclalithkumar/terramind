import { useEffect, useState } from "react";
import type { SimulationTimeline } from "../types/simulation";


export function useSimulation(
  simulation: SimulationTimeline
) {

  const [currentDay, setCurrentDay] = useState(1);

  const [isPlaying, setIsPlaying] = useState(false);


  const currentEvent =
    simulation.events.find(
      (event) => event.day === currentDay
    );


  useEffect(() => {

    if (!isPlaying)
      return;


    const timer = setInterval(() => {

      setCurrentDay((day) => {

        const nextDay = day + 1;


        const maxDay =
          simulation.events[
            simulation.events.length - 1
          ].day;


        if (nextDay > maxDay) {
          setIsPlaying(false);
          return day;
        }


        return nextDay;

      });

    }, 2000);


    return () => clearInterval(timer);


  }, [isPlaying, simulation]);


  return {

    currentDay,

    currentEvent,

    isPlaying,

    play: () => setIsPlaying(true),

    pause: () => setIsPlaying(false),

    reset: () => {
      setCurrentDay(1);
      setIsPlaying(false);
    }

  };

}