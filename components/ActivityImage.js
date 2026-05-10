import { useState } from "react";

const categoryGradients = {
  Comedy: "from-amber-300 to-orange-400",
  Sports: "from-emerald-300 to-teal-400",
  Outdoor: "from-lime-300 to-green-400",
  Animals: "from-amber-200 to-yellow-400",
  Museum: "from-violet-300 to-purple-400",
  "Day Trip": "from-sky-300 to-blue-400",
  Food: "from-rose-300 to-pink-400",
  Music: "from-fuchsia-300 to-purple-400",
  Theater: "from-red-300 to-rose-400",
  Activity: "from-cyan-300 to-teal-400",
  Festival: "from-rose-300 to-orange-400",
};

export default function ActivityImage({ src, alt, category }) {
  const [failed, setFailed] = useState(false);
  const gradient = categoryGradients[category] || "from-amber-200 to-orange-300";

  if (!src || failed) {
    return (
      <div
        className={`flex h-28 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
      >
        <span className="text-[10px] font-medium text-white/80">{category}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-28 w-24 shrink-0 rounded-xl object-cover"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
