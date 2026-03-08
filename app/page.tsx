import Link from "next/link";
import { getAllConspiracies, getScorecard } from "@/lib/getConspiracies";
import HomepageClient from "@/components/HomepageClient";

export default function Home() {
  const conspiracies = getAllConspiracies();
  const scorecard = getScorecard();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <header className="scanlines relative overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-16 pb-12">
          <nav className="flex justify-between items-center mb-16">
            <span
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              [ARCHIVE]
            </span>
            <Link
              href="/about"
              className="font-mono text-xs uppercase hover:underline"
              style={{
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              METHODOLOGY
            </Link>
          </nav>

          <h1
            className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: "var(--text)" }}
          >
            Best Time to Be a
            <br />
            Conspiracy Theorist
          </h1>
          <p
            className="font-serif text-lg sm:text-xl italic mb-6"
            style={{ color: "var(--accent)" }}
          >
            A running ledger of the claims they told you were crazy.
          </p>
          <p
            className="font-serif text-base max-w-2xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            This is a sourced, factual archive of conspiracy theories that
            turned out to be true — or remain unresolved. Every entry is backed
            by declassified documents, court records, or official
            acknowledgments. Nothing here is speculation.
          </p>
        </div>
      </header>

      <HomepageClient conspiracies={conspiracies} scorecard={scorecard} />

      {/* Footer */}
      <footer
        className="w-full py-8 text-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="font-serif text-sm italic"
          style={{ color: "var(--text-muted)" }}
        >
          Built on public record. Nothing on this site is speculation.
        </p>
      </footer>
    </div>
  );
}
