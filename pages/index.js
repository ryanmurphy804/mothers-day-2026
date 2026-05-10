import { useState } from "react";
import { Heart } from "lucide-react";
import SplashScreen from "@/components/SplashScreen";
import SegmentedControl from "@/components/SegmentedControl";
import ActivityCard from "@/components/ActivityCard";
import { events } from "@/data/events";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Scheduled", value: "scheduled" },
  { label: "Anytime", value: "anytime" },
];

export default function Home() {
  const [hasOpened, setHasOpened] = useState(false);
  const [filter, setFilter] = useState("all");
  const scheduled = events
    .filter((e) => e.type === "scheduled")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const anytime = events.filter((e) => e.type === "anytime");

  const visibleEvents =
    filter === "scheduled"
      ? scheduled
      : filter === "anytime"
        ? anytime
        : [...scheduled, ...anytime];

  if (!hasOpened) {
    return <SplashScreen onOpen={() => setHasOpened(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <div className="mx-auto max-w-[480px] px-4 pb-12 pt-8 sm:px-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <span
            className="anim-fade-down mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#D97706] backdrop-blur-sm"
          >
            <Heart className="h-3 w-3" fill="currentColor" />
            Made for Mom
          </span>
          <h1
            className="anim-fade-up mb-2 text-2xl font-bold tracking-tight text-[#2F241D] sm:text-3xl"
            style={{ animationDelay: "0.1s" }}
          >
            Things We Can Do Together
          </h1>
          <p
            className="anim-fade-up text-sm leading-relaxed text-[#7A6655]"
            style={{ animationDelay: "0.2s" }}
          >
            A little list of family adventures, shows, games, day trips, and
            easy nights out around Richmond and DC.
          </p>
        </div>

        {/* Segmented control */}
        <div
          className="anim-fade-up mb-4"
          style={{ animationDelay: "0.3s" }}
        >
          <SegmentedControl
            value={filter}
            onChange={setFilter}
            options={filterOptions}
          />
        </div>

        {/* Cards */}
        <div className="divide-y divide-[#F3D6B6]/60">
          {visibleEvents.map((event, i) => (
            <div
              key={event.id}
              className="anim-fade-up"
              style={{ animationDelay: `${0.35 + i * 0.06}s` }}
            >
              <ActivityCard event={event} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="anim-fade-in mt-10 text-center"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-sm text-[#7A6655]">
            Pick your favorites and we&apos;ll make a plan.
          </p>
          <div className="mx-auto mt-3 flex items-center justify-center gap-1.5 text-[#D97706]">
            <Heart className="h-4 w-4" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
}
