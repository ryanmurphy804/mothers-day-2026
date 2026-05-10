export default function SegmentedControl({ value, onChange, options }) {
  return (
    <div className="inline-flex w-full rounded-full bg-[#F3D6B6]/40 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition ${
            value === option.value
              ? "bg-white text-[#2F241D] shadow-sm"
              : "text-[#7A6655] active:bg-white/40"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
