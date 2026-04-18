type MetaItem = {
  label?: string;
  value: string;
};

type Props = {
  items: MetaItem[];
  separator?: string;
};

export function Meta({ items, separator = "\u00B7" }: Props) {
  if (items.length === 0) return null;
  return (
    <p className="content-meta">
      {items.map((item, index) => (
        <span key={`${item.label ?? ""}-${item.value}`} className="content-meta-item">
          {item.label && (
            <span className="content-meta-label">{item.label}</span>
          )}
          <span className="content-meta-value">{item.value}</span>
          {index < items.length - 1 && (
            <span aria-hidden="true" className="content-meta-sep">
              {` ${separator} `}
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
