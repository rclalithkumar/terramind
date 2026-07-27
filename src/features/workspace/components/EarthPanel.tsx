import EarthCanvas from "@/components/earth/EarthCanvas";

export default function EarthPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-xl font-semibold">
        Earth View
      </h2>

      <div className="h-[650px]">
        <EarthCanvas />
      </div>
    </section>
  );
}