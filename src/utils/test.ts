export const projectName = "TerraMind";
import { classifyEvent } from "@/features/simulation/engine/eventClassifier";


console.log(
  classifyEvent(
    "Flood in Bengaluru tomorrow"
  )
);


console.log(
  classifyEvent(
    "Earthquake in Tokyo"
  )
);


console.log(
  classifyEvent(
    "Wildfire in California"
  )
);