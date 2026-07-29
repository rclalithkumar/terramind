import Sidebar from "./Sidebar";
import EarthPanel from "./EarthPanel";
import TimelinePanel from "./TimelinePanel";
import ResultsPanel from "./ResultsPanel";
import AnalyticsPanel from "./AnalyticsPanel";

export default function WorkspaceLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Workspace */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-8 p-8">

          <EarthPanel />

          <div className="grid items-stretch gap-8 xl:grid-cols-[1.25fr_0.75fr]">
            <TimelinePanel />
            <AnalyticsPanel />
          </div>

          <ResultsPanel />

        </div>
      </main>
    </div>
  );
}