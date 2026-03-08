"use client";

import { RelatedMedia } from "@/lib/types";

const typeLabels: Record<RelatedMedia["type"], string> = {
  podcast: "PODCAST",
  documentary: "DOCUMENTARY",
  series: "SERIES",
  book: "BOOK",
  youtube: "YOUTUBE",
};

const typeColors: Record<RelatedMedia["type"], string> = {
  podcast: "#b388ff",
  documentary: "#88aaff",
  series: "var(--unresolved)",
  book: "var(--accent)",
  youtube: "#ff6b6b",
};

export default function MediaList({ media }: { media: RelatedMedia[] }) {
  return (
    <div className="space-y-4">
      {media.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border p-4 transition-all duration-200 hover:border-opacity-60 group"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-surface)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = typeColors[item.type];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 shrink-0"
              style={{
                color: typeColors[item.type],
                border: `1px solid ${typeColors[item.type]}`,
                letterSpacing: "0.1em",
                opacity: 0.8,
              }}
            >
              {typeLabels[item.type]}
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              {item.year}
            </span>
          </div>
          <h4
            className="font-mono text-sm font-bold mb-1 group-hover:underline"
            style={{ color: "var(--text)" }}
          >
            {item.title}
            <span
              className="font-mono text-[10px] ml-2 font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              [EXT]
            </span>
          </h4>
          <p
            className="font-serif text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}
