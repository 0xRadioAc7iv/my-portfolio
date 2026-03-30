import { DotGrid } from "./components/dot-grid";

export default function NotFound() {
  return (
    <div className="flex justify-center mt-16">
      {/* Background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <DotGrid />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-6 px-6 text-center">
        {/* <p className="font-mono text-xs uppercase tracking-widest text-[#8888a8]">
          404
        </p> */}
        <h1 className="bangers text-5xl sm:text-6xl text-[#f5f5ff]">
          You Lost?
        </h1>
        <p className="text-[#c8c8e0]/70 text-sm max-w-xs leading-relaxed">
          This page doesn&apos;t exist. Impressive dedication to clicking random
          URLs though.
        </p>
        <a
          href="/"
          className="font-mono text-xs uppercase tracking-widest text-[#8888a8] hover:text-white border border-white/10 hover:border-indigo-500/40 px-5 py-2.5 rounded-lg transition-all duration-200"
        >
          Back to safety
        </a>
      </div>
    </div>
  );
}
