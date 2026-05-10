export default function SplashScreen({ onOpen }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-[#FFF7ED]">
      <div className="mx-auto flex min-h-full max-w-[480px] flex-col px-4 pb-10 pt-6 sm:px-6">
        {/* Eyebrow */}
        <div className="mb-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[#7A6655] uppercase backdrop-blur-sm">
            Mother&apos;s Day 2026
          </span>
        </div>

        {/* Hero image */}
        <div className="relative mb-5 overflow-hidden rounded-2xl">
          <img
            src="/images/family.png"
            alt="The Murphy family"
            className="w-full object-cover"
            style={{ maxHeight: "44vh" }}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#2F241D]">
            Happy Mother&apos;s Day, Mom
          </h1>

          <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#7A6655] sm:text-base">
            I know your favorite thing is when we all spend time together, so I
            made this little list of ideas for family days, nights, adventures,
            shows, games, and little memories we can make together.
          </p>

          <button
            onClick={onOpen}
            className="rounded-full bg-gradient-to-r from-[#D97706] to-[#C2410C] px-8 py-4 text-base font-semibold text-white shadow-lg transition active:scale-[0.97]"
          >
            Open the list
          </button>
        </div>
      </div>
    </div>
  );
}
