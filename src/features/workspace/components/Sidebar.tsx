import {
  Globe,
  History,
  FolderOpen,
  Settings,
} from "lucide-react";

const items = [
  { icon: Globe, label: "Simulation" },
  { icon: History, label: "History" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen border-r border-white/10 bg-[#090C1A]">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">
          TerraMind
        </h1>

        <div className="mt-10 space-y-2">
          {items.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-slate-300
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}