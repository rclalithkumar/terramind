import { Sparkles } from "lucide-react";

export default function CommandBar() {
  return (
    <div
      className="
        mx-auto
        mt-10
        flex
        w-full
        max-w-2xl
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        backdrop-blur-xl
        shadow-2xl
      "
    >
      <Sparkles className="h-5 w-5 text-indigo-400" />

      <input
        placeholder="What would you like to simulate?"
        className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
      />

      <button
        className="
          rounded-xl
          bg-indigo-500
          px-5
          py-2
          text-sm
          font-medium
          transition
          hover:bg-indigo-400
        "
      >
        Simulate
      </button>
    </div>
  );
}