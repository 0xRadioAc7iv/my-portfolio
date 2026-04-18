type Props = {
  eyebrow: string;
  heading: string;
  support?: string;
  level?: "h1" | "h2";
};

export function SectionIntro({
  eyebrow,
  heading,
  support,
  level = "h2",
}: Props) {
  const Heading = level;
  return (
    <div className="section-header">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <Heading className="section-title">{heading}</Heading>
      </div>
      {support && <p className="section-copy">{support}</p>}
    </div>
  );
}
