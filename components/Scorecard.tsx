"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({
  value,
  color,
  label,
}: {
  value: number;
  color: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center border px-6 py-5 min-w-[140px]"
      style={{ borderColor: "var(--border)" }}
    >
      <span className="font-mono text-4xl font-bold" style={{ color }}>
        {display}
      </span>
      <span
        className="font-mono text-[10px] font-medium mt-2 uppercase"
        style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Scorecard({
  confirmed,
  unresolved,
  debunked,
  total,
  confirmationRate,
}: {
  confirmed: number;
  unresolved: number;
  debunked: number;
  total: number;
  confirmationRate: number;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        <AnimatedCounter
          value={confirmed}
          color="var(--confirmed)"
          label="CONFIRMED"
        />
        <AnimatedCounter
          value={unresolved}
          color="var(--unresolved)"
          label="UNRESOLVED"
        />
        <AnimatedCounter
          value={debunked}
          color="var(--debunked)"
          label="DEBUNKED"
        />
        <AnimatedCounter
          value={total}
          color="var(--text)"
          label="TOTAL TRACKED"
        />
      </div>
      <p
        className="text-center font-mono text-sm mt-4"
        style={{ color: "var(--text-muted)" }}
      >
        <span style={{ color: "var(--confirmed)" }}>{confirmationRate}%</span>{" "}
        of closed cases confirmed true
      </p>
    </div>
  );
}
