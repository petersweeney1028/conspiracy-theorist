"use client";

import Link from "next/link";
import { Conspiracy } from "@/lib/types";
import StatusBadge from "./StatusBadge";

const statusColorMap = {
  CONFIRMED: "rgba(57, 255, 20, 0.15)",
  UNRESOLVED: "rgba(255, 179, 71, 0.15)",
  DEBUNKED: "rgba(255, 68, 68, 0.15)",
};

export default function ConspiracyCard({
  conspiracy,
}: {
  conspiracy: Conspiracy;
}) {
  const c = conspiracy;

  return (
    <Link href={`/${c.slug}`}>
      <div
        className="group border p-5 h-full flex flex-col justify-between transition-all duration-300"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-card)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 20px ${statusColorMap[c.status]}, inset 0 0 20px ${statusColorMap[c.status]}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <StatusBadge status={c.status} />
            {c.years_to_confirm && (
              <span
                className="font-mono text-[10px] font-bold uppercase whitespace-nowrap"
                style={{
                  color: "var(--confirmed)",
                  letterSpacing: "0.1em",
                }}
              >
                {c.years_to_confirm} YRS TO CONFIRM
              </span>
            )}
          </div>

          <h3
            className="font-mono text-lg font-bold mb-2 leading-tight"
            style={{ color: "var(--text)" }}
          >
            {c.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {c.category.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[10px] uppercase px-2 py-0.5"
                style={{
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                  letterSpacing: "0.1em",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          <p
            className="font-serif text-sm leading-relaxed line-clamp-3"
            style={{ color: "var(--text-muted)" }}
          >
            {c.summary}
          </p>
        </div>

        <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          <span
            className="font-mono text-xs font-medium uppercase group-hover:underline"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.1em",
            }}
          >
            VIEW FILE &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
