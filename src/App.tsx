import AppRouter from "@/routes/AppRouter";
import { FLOOD_SIMULATION } from "./data/simulations";
import { useSimulation } from "./hooks/useSimulation";


export default function App() {

  const simulation =
    useSimulation(FLOOD_SIMULATION);


  console.log(simulation);


  return <AppRouter />;

}