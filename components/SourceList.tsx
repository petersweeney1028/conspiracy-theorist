import { Source } from "@/lib/types";

const typeLabels: Record<Source["type"], string> = {
  primary: "PRIMARY",
  journalism: "JOURNALISM",
  academic: "ACADEMIC",
  official: "OFFICIAL",
};

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="space-y-3">
      {sources.map((source, i) => (
        <div
          key={i}
          className="flex items-start gap-3 py-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span
            className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 mt-0.5 shrink-0"
            style={{
              color: "var(--accent)",
              border: "1px solid var(--border)",
              letterSpacing: "0.1em",
            }}
          >
            {typeLabels[source.type]}
          </span>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-sm leading-relaxed hover:underline transition-colors"
            style={{ color: "var(--text)" }}
          >
            {source.title}
            <span
              className="font-mono text-[10px] ml-2"
              style={{ color: "var(--text-muted)" }}
            >
              [EXT]
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
