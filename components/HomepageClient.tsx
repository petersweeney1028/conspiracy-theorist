"use client";

import { useState, useMemo } from "react";
import { Conspiracy, Status } from "@/lib/types";
import Scorecard from "./Scorecard";
import FilterBar from "./FilterBar";
import ConspiracyCard from "./ConspiracyCard";

type SortOption = "documented" | "chronological" | "fastest";

export default function HomepageClient({
  conspiracies,
  scorecard,
}: {
  conspiracies: Conspiracy[];
  scorecard: {
    confirmed: number;
    unresolved: number;
    debunked: number;
    total: number;
    confirmationRate: number;
  };
}) {
  const [statusFilter, setStatusFilter] = useState<Status | "ALL">("ALL");
  const [sort, setSort] = useState<SortOption>("documented");

  const filtered = useMemo(() => {
    let result =
      statusFilter === "ALL"
        ? conspiracies
        : conspiracies.filter((c) => c.status === statusFilter);

    switch (sort) {
      case "documented":
        result = [...result].sort(
          (a, b) => b.timeline.length - a.timeline.length
        );
        break;
      case "chronological":
        result = [...result].sort((a, b) => {
          const aYear = parseInt(a.first_claimed) || 9999;
          const bYear = parseInt(b.first_claimed) || 9999;
          return aYear - bYear;
        });
        break;
      case "fastest":
        result = [...result].sort((a, b) => {
          const aYears = a.years_to_confirm ?? 9999;
          const bYears = b.years_to_confirm ?? 9999;
          return aYears - bYears;
        });
        break;
    }

    return result;
  }, [conspiracies, statusFilter, sort]);

  return (
    <>
      {/* Scorecard */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        <Scorecard {...scorecard} />
      </section>

      {/* Filter + Grid */}
      <section className="w-full max-w-5xl mx-auto px-4 pb-20">
        <FilterBar
          activeStatus={statusFilter}
          activeSort={sort}
          onStatusFilter={setStatusFilter}
          onSortChange={setSort}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filtered.map((c) => (
            <ConspiracyCard key={c.id} conspiracy={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center font-mono text-sm py-12"
            style={{ color: "var(--text-muted)" }}
          >
            NO FILES MATCHING CURRENT FILTER
          </p>
        )}
      </section>
    </>
  );
}
