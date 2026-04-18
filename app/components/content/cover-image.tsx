type Props = {
  src: string;
  alt: string;
};

export function CoverImage({ src, alt }: Props) {
  return (
    <figure className="cover-image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="eager" decoding="async" />
    </figure>
  );
}
