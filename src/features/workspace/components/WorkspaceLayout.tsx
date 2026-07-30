import Sidebar from "./Sidebar";
import EarthPanel from "./EarthPanel";
import TimelinePanel from "./TimelinePanel";
import ResultsPanel from "./ResultsPanel";
import AnalyticsPanel from "./AnalyticsPanel";

export default function WorkspaceLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#020617] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-screen max-w-[2000px] flex-col gap-6 p-6">

          {/* Hero Section */}
          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">

            {/* Earth */}
            <div className="h-180">
              <EarthPanel />
            </div>

            {/* Right Mission Control */}
            <div className="flex h-180 flex-col gap-6">

              <div className="flex-1">
                <ResultsPanel />
              </div>

              <div className="flex-1">
                <AnalyticsPanel />
              </div>

            </div>

          </div>

          {/* Timeline */}
          <div className="min-h-70">
            <TimelinePanel />
          </div>

        </div>
      </main>

    </div>
  );
}