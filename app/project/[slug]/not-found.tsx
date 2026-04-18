import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="page-shell animate-fade-up">
      <section className="not-found-panel">
        <p className="section-kicker">404</p>
        <h1 className="section-title">Project not found.</h1>
        <p className="section-copy">
          This project doesn&apos;t exist, or it was moved. Back to{" "}
          <Link href="/#projects">the projects list</Link>.
        </p>
      </section>
    </div>
  );
}
