type FichaRow = {
  label: string;
  value: string;
};

export default function Ficha({
  rows,
  className,
}: {
  rows: FichaRow[];
  className?: string;
}) {
  return (
    <dl className={`flex flex-col gap-1 ${className ?? ""}`}>
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline gap-2 text-sm">
          <dt className="text-foreground/70">{row.label}:</dt>
          <dd className="text-foreground/80">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
