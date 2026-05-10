export default function SplashScreen({ onOpen }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-[#FFF7ED]">
      <div className="mx-auto flex min-h-full max-w-[480px] flex-col px-4 pb-10 pt-6 sm:px-6">
        {/* Eyebrow */}
        <div className="anim-fade-down mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[#7A6655] uppercase backdrop-blur-sm">
            Mother&apos;s Day 2026
          </span>
        </div>

        {/* Hero image */}
        <div
          className="anim-fade-scale relative mb-5 overflow-hidden rounded-2xl"
          style={{ animationDelay: "0.15s" }}
        >
          <img
            src="/images/family.png"
            alt="The Murphy family"
            className="w-full object-cover"
            style={{ maxHeight: "44vh" }}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center">
          <h1
            className="anim-fade-up mb-4 text-3xl font-bold tracking-tight text-[#2F241D]"
            style={{ animationDelay: "0.35s" }}
          >
            Happy Mother&apos;s Day, Mom
          </h1>

          <p
            className="anim-fade-up mb-8 max-w-sm text-sm leading-relaxed text-[#7A6655] sm:text-base"
            style={{ animationDelay: "0.5s" }}
          >
            I know your favorite thing is when we all spend time together, so I
            made this little list of ideas for family days, nights, adventures,
            shows, games, and little memories we can make together.
          </p>

          <button
            onClick={onOpen}
            className="anim-fade-up relative overflow-hidden rounded-full bg-gradient-to-br from-[#E8637C] to-[#F2986B] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#E8637C]/30 transition active:scale-[0.97] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/25 before:to-transparent before:to-50%"
            style={{ animationDelay: "0.65s" }}
          >
            Open the list
          </button>
        </div>
      </div>
    </div>
  );
}
