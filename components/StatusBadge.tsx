"use client";

import { Status } from "@/lib/types";

const statusConfig: Record<
  Status,
  { color: string; borderColor: string; label: string }
> = {
  CONFIRMED: {
    color: "var(--confirmed)",
    borderColor: "rgba(57, 255, 20, 0.3)",
    label: "CONFIRMED",
  },
  UNRESOLVED: {
    color: "var(--unresolved)",
    borderColor: "rgba(255, 179, 71, 0.3)",
    label: "UNRESOLVED",
  },
  DEBUNKED: {
    color: "var(--debunked)",
    borderColor: "rgba(255, 68, 68, 0.3)",
    label: "DEBUNKED",
  },
};

export default function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];

  return (
    <span
      className="inline-block font-mono text-xs font-bold uppercase px-3 py-1"
      style={{
        color: config.color,
        border: `1px solid ${config.borderColor}`,
        letterSpacing: "0.15em",
        textShadow: `0 0 10px ${config.borderColor}`,
      }}
    >
      {config.label}
    </span>
  );
}
