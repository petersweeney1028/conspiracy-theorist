"use client";

import { Status } from "@/lib/types";

type SortOption = "documented" | "chronological" | "fastest";

const statusOptions: { label: string; value: Status | "ALL" }[] = [
  { label: "ALL", value: "ALL" },
  { label: "CONFIRMED", value: "CONFIRMED" },
  { label: "UNRESOLVED", value: "UNRESOLVED" },
  { label: "DEBUNKED", value: "DEBUNKED" },
];

const sortOptions: { label: string; value: SortOption }[] = [
  { label: "MOST DOCUMENTED", value: "documented" },
  { label: "CHRONOLOGICAL", value: "chronological" },
  { label: "FASTEST CONFIRMED", value: "fastest" },
];

export default function FilterBar({
  activeStatus,
  activeSort,
  onStatusFilter,
  onSortChange,
}: {
  activeStatus: Status | "ALL";
  activeSort: SortOption;
  onStatusFilter: (status: Status | "ALL") => void;
  onSortChange: (sort: SortOption) => void;
}) {
  return (
    <div
      className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex flex-wrap gap-1">
        {statusOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onStatusFilter(opt.value)}
            className="font-mono text-xs uppercase px-3 py-2 transition-all duration-200"
            style={{
              letterSpacing: "0.1em",
              color:
                activeStatus === opt.value
                  ? "var(--text)"
                  : "var(--text-muted)",
              borderBottom:
                activeStatus === opt.value
                  ? "2px solid var(--text)"
                  : "2px solid transparent",
              background: "transparent",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <select
        value={activeSort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="font-mono text-xs uppercase px-3 py-2 cursor-pointer"
        style={{
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          outline: "none",
        }}
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
