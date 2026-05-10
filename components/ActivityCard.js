import { ExternalLink } from "lucide-react";
import ActivityImage from "./ActivityImage";

function formatDate(isoString) {
  if (!isoString) return "Anytime";
  const d = new Date(isoString);
  const day = d.toLocaleDateString("en-US", { weekday: "short" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const date = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const h = hours % 12 || 12;
  const m = minutes.toString().padStart(2, "0");
  return `${day}, ${month} ${date} · ${h}:${m} ${ampm}`;
}

export default function ActivityCard({ event }) {
  const linkLabel = event.type === "scheduled" ? "Tickets" : "Website";

  return (
    <div className="flex gap-4 py-4">
      <ActivityImage
        src={event.image}
        alt={event.title}
        category={event.category}
      />

      <div className="min-w-0 flex-1">
        {/* Date + category row */}
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="inline-block rounded-md bg-[#FED7AA]/40 px-2 py-0.5 text-[13px] font-medium text-[#92400e]">
            {formatDate(event.date)}
          </span>
          <span className="shrink-0 text-xs font-medium tracking-wide text-[#D97706]">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-0.5 text-base font-semibold leading-snug text-[#2F241D]">
          {event.title}
        </h3>

        {/* Location */}
        <p className="mb-1.5 text-[13px] text-[#7A6655]">
          {event.locationName}
          {event.city ? ` · ${event.city}` : ""}
        </p>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-[#7A6655]">
          {event.shortDescription}
        </p>

        {/* Link */}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-[#D97706] transition active:opacity-70"
          >
            {linkLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
