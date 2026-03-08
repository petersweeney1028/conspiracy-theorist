import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllConspiracies,
  getConspiracyBySlug,
} from "@/lib/getConspiracies";
import StatusBadge from "@/components/StatusBadge";
import ConspiracyTimeline from "@/components/ConspiracyTimeline";
import SourceList from "@/components/SourceList";
import MediaList from "@/components/MediaList";

export function generateStaticParams() {
  return getAllConspiracies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const conspiracy = getConspiracyBySlug(slug);
  if (!conspiracy) return { title: "Not Found" };

  return {
    title: `${conspiracy.title} — Best Time to Be a Conspiracy Theorist`,
    description: conspiracy.summary,
    openGraph: {
      title: conspiracy.title,
      description: conspiracy.summary,
    },
  };
}

export default async function ConspiracyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const conspiracy = getConspiracyBySlug(slug);

  if (!conspiracy) {
    notFound();
  }

  const c = conspiracy;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-block font-mono text-xs uppercase mb-8 hover:underline"
          style={{
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
          }}
        >
          &larr; RETURN TO ARCHIVE
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <StatusBadge status={c.status} />
            {c.years_to_confirm && (
              <span
                className="font-mono text-sm font-bold uppercase"
                style={{
                  color: "var(--confirmed)",
                  letterSpacing: "0.1em",
                }}
              >
                CONFIRMED {c.years_to_confirm} YEARS LATER
              </span>
            )}
          </div>

          <h1
            className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "var(--text)" }}
          >
            {c.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
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
            className="font-serif text-base leading-relaxed max-w-3xl"
            style={{ color: "var(--text-muted)" }}
          >
            {c.summary}
          </p>

          {c.first_claimed && (
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <span
                  className="font-mono text-[10px] uppercase block mb-1"
                  style={{
                    color: "var(--text-muted)",
                    letterSpacing: "0.15em",
                  }}
                >
                  FIRST CLAIMED
                </span>
                <span className="font-mono text-sm" style={{ color: "var(--text)" }}>
                  {c.first_claimed}
                </span>
              </div>
              {c.confirmed_date && (
                <div>
                  <span
                    className="font-mono text-[10px] uppercase block mb-1"
                    style={{
                      color: "var(--text-muted)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    CONFIRMED
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: "var(--confirmed)" }}
                  >
                    {c.confirmed_date}
                  </span>
                </div>
              )}
            </div>
          )}
        </header>

        {/* Two-column comparison */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16 border"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="p-6"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderRight: "1px solid var(--border)",
            }}
          >
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--debunked)",
                letterSpacing: "0.15em",
              }}
            >
              WHAT THEY SAID AT THE TIME
            </h2>
            <p
              className="font-serif text-sm leading-relaxed italic"
              style={{ color: "var(--text-muted)" }}
            >
              {c.mainstream_narrative_at_time}
            </p>
          </div>

          <div className="p-6" style={{ backgroundColor: "var(--bg-card)" }}>
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--confirmed)",
                letterSpacing: "0.15em",
              }}
            >
              WHAT ACTUALLY HAPPENED
            </h2>
            <p
              className="font-serif text-sm leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              {c.what_happened}
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2
            className="font-mono text-xs font-bold uppercase mb-8"
            style={{
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
            }}
          >
            TIMELINE OF EVENTS
          </h2>
          <ConspiracyTimeline timeline={c.timeline} />
        </section>

        {/* Sources */}
        <section className="mb-16">
          <h2
            className="font-mono text-xs font-bold uppercase mb-6"
            style={{
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
            }}
          >
            KEY SOURCES ({c.key_sources.length})
          </h2>
          <SourceList sources={c.key_sources} />
        </section>

        {/* Related Media */}
        {c.related_media && c.related_media.length > 0 && (
          <section className="mb-16">
            <h2
              className="font-mono text-xs font-bold uppercase mb-6"
              style={{
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              GO DEEPER ({c.related_media.length})
            </h2>
            <MediaList media={c.related_media} />
          </section>
        )}

        {/* Back link bottom */}
        <Link
          href="/"
          className="inline-block font-mono text-xs uppercase hover:underline"
          style={{
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
          }}
        >
          &larr; RETURN TO ARCHIVE
        </Link>
      </div>
    </div>
  );
}
