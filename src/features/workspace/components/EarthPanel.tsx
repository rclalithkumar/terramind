import EarthCanvas from "@/components/earth/EarthCanvas";
import { useScenarioStore } from "@/store/scenarioStore";
import GlassPanel from "@/components/ui/GlassPanel";
export default function EarthPanel() {
  const selectedLocation = useScenarioStore(
    (state) => state.selectedLocation
  );

  return (
    <GlassPanel className="p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Earth View
      </h2>

      <div className="h-[650px]">
        <EarthCanvas selectedLocation={selectedLocation} />
      </div>
    </GlassPanel>
  );
}