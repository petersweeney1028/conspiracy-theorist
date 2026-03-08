import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology — Best Time to Be a Conspiracy Theorist",
  description:
    "How entries are selected, what confirmed means, and what this site is not.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-3xl mx-auto px-4 py-12">
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

        <h1
          className="font-mono text-2xl sm:text-3xl font-bold mb-8"
          style={{ color: "var(--text)" }}
        >
          Methodology
        </h1>

        <div className="space-y-10">
          <section>
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.15em",
              }}
            >
              HOW ENTRIES ARE SELECTED
            </h2>
            <div
              className="font-serif text-base leading-relaxed space-y-4"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Every entry in this archive must meet a clear evidentiary
                threshold. We do not include theories based on speculation,
                social media rumors, or unverified claims — no matter how widely
                believed.
              </p>
              <p>
                For an entry to be included, it must have at least one of the
                following: declassified government documents, court records or
                legal proceedings, official admissions or acknowledgments,
                peer-reviewed research, or investigative journalism from
                established outlets with named sources.
              </p>
              <p>
                The bar is documentary evidence, not popular belief.
              </p>
            </div>
          </section>

          <section
            className="pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--confirmed)",
                letterSpacing: "0.15em",
              }}
            >
              WHAT &ldquo;CONFIRMED&rdquo; MEANS
            </h2>
            <div
              className="font-serif text-base leading-relaxed space-y-4"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                <strong style={{ color: "var(--confirmed)" }}>CONFIRMED</strong>{" "}
                means the core claim of the conspiracy theory has been
                substantiated through official channels — declassified documents,
                government admissions, court rulings, or equivalent
                institutional acknowledgment. It does not mean every peripheral
                detail was accurate, only that the central allegation proved
                true.
              </p>
              <p>
                <strong style={{ color: "var(--unresolved)" }}>
                  UNRESOLVED
                </strong>{" "}
                means credible evidence exists suggesting the theory may be
                partially or fully accurate, but definitive confirmation is
                lacking. This may be because investigations are ongoing, key
                evidence remains classified, or institutional actors have neither
                confirmed nor conclusively denied the claims.
              </p>
              <p>
                <strong style={{ color: "var(--debunked)" }}>DEBUNKED</strong>{" "}
                means the theory has been thoroughly investigated and
                contradicted by strong evidence. The scientific consensus, expert
                analysis, and available evidence all point against the claim.
              </p>
            </div>
          </section>

          <section
            className="pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--debunked)",
                letterSpacing: "0.15em",
              }}
            >
              WHAT THIS SITE IS NOT
            </h2>
            <div
              className="font-serif text-base leading-relaxed space-y-4"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                This is not a platform for promoting unverified conspiracy
                theories. The existence of this archive — documenting cases
                where institutions lied, concealed, or suppressed the truth —
                does not validate every unproven claim.
              </p>
              <p>
                The inclusion of debunked entries is intentional. It
                demonstrates that this archive applies the same evidentiary
                standards to all claims. Some conspiracy theories are wrong. The
                record should reflect that honestly.
              </p>
              <p>
                The goal is not to encourage distrust in all institutions, but
                to document the historical record accurately — including the
                cases where institutional trust was misplaced.
              </p>
            </div>
          </section>

          <section
            className="pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <h2
              className="font-mono text-xs font-bold uppercase mb-4"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.15em",
              }}
            >
              THE DEBUNKED SECTION
            </h2>
            <div
              className="font-serif text-base leading-relaxed space-y-4"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                The debunked section exists specifically to demonstrate editorial
                integrity. A site that only listed confirmed conspiracies would
                imply that every conspiracy theory is eventually proven right.
                That is not the case, and pretending otherwise would be
                dishonest.
              </p>
              <p>
                Some theories are wrong. Documenting both outcomes is what
                separates this archive from conspiracy culture.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
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
    </div>
  );
}
