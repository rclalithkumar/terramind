import EarthCanvas from "@/components/earth/EarthCanvas";
import { useScenarioStore } from "@/store/scenarioStore";

export default function EarthPanel() {
  const selectedLocation = useScenarioStore(
    (state) => state.selectedLocation
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-xl font-semibold">
        Earth View
      </h2>

      <div className="h-[650px]">
        <EarthCanvas selectedLocation={selectedLocation} />
      </div>
    </section>
  );
}