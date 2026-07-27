import Sidebar from "./Sidebar";
import EarthPanel from "./EarthPanel";
import TimelinePanel from "./TimelinePanel";
import ResultsPanel from "./ResultsPanel";
import AnalyticsPanel from "./AnalyticsPanel";

export default function WorkspaceLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr] bg-[#050816] text-white">

      <Sidebar />

      <main className="overflow-y-auto p-6">

        <div className="grid gap-6">

          {/* Earth */}
          <EarthPanel />

          {/* Bottom Grid */}
          <div className="grid gap-6 lg:grid-cols-2">

            <TimelinePanel />

            <AnalyticsPanel />

          </div>

          <ResultsPanel />

        </div>

      </main>

    </div>
  );
}