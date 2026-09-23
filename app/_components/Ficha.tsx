type FichaRow = {
  label: string;
  value: string;
};

export default function Ficha({
  title,
  rows,
  className,
}: {
  title?: string;
  rows: FichaRow[];
  className?: string;
}) {
  return (
    <div
      className={`border border-foreground/20 font-mono text-foreground/80 ${className ?? ""}`}
    >
      {title ? (
        <div className="border-b border-foreground/20 px-4 py-2 text-[11px] tracking-[0.2em] text-foreground/70 uppercase">
          {title}
        </div>
      ) : null}
      <dl>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-baseline justify-between gap-4 px-4 py-3 text-xs sm:text-sm ${
              index !== rows.length - 1 ? "border-b border-foreground/10" : ""
            }`}
          >
            <dt className="tracking-[0.15em] text-foreground/70 uppercase">
              {row.label}
            </dt>
            <dd className="text-right text-foreground/80">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
