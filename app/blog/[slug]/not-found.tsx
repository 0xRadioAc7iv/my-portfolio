import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <div className="page-shell animate-fade-up">
      <section className="not-found-panel">
        <p className="section-kicker">404</p>
        <h1 className="section-title">Post not found.</h1>
        <p className="section-copy">
          This post doesn&apos;t exist, or it was moved. Back to{" "}
          <Link href="/blogs">the writing index</Link>.
        </p>
      </section>
    </div>
  );
}
