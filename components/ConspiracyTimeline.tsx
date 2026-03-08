"use client";

import { TimelineEvent, TimelineEventType } from "@/lib/types";

const typeConfig: Record<
  TimelineEventType,
  { color: string; label: string }
> = {
  origin: { color: "var(--text-muted)", label: "ORIGIN" },
  coverup: { color: "var(--unresolved)", label: "COVER-UP" },
  exposure: { color: "#88aaff", label: "EXPOSURE" },
  confirmation: { color: "var(--confirmed)", label: "CONFIRMED" },
  denial: { color: "var(--debunked)", label: "DENIAL" },
  development: { color: "var(--accent)", label: "DEVELOPMENT" },
};

export default function ConspiracyTimeline({
  timeline,
}: {
  timeline: TimelineEvent[];
}) {
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-3 top-0 bottom-0 w-px"
        style={{ backgroundColor: "var(--border)" }}
      />

      {timeline.map((event, i) => {
        const config = typeConfig[event.type];
        return (
          <div
            key={i}
            className="relative mb-8 last:mb-0 animate-fadeIn"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              className="absolute left-[-22px] top-1.5 w-3 h-3 border-2"
              style={{
                borderColor: config.color,
                backgroundColor: "var(--bg)",
              }}
            />

            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span
                className="font-mono text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {event.date}
              </span>
              <span
                className="font-mono text-[9px] font-bold uppercase px-2 py-0.5"
                style={{
                  color: config.color,
                  border: `1px solid ${config.color}`,
                  letterSpacing: "0.12em",
                  opacity: 0.8,
                }}
              >
                {config.label}
              </span>
            </div>

            <p
              className="font-serif text-sm leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              {event.event}
            </p>
          </div>
        );
      })}
    </div>
  );
}
