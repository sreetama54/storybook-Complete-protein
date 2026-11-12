export const ESSENTIAL_AMINO_ACIDS = 9;

export interface AminoDotsProps {
  /** Amino acids covered by the selected ingredient. */
  base: number;
  /** Amino acids added by the pairing. */
  added: number;
}

export function AminoDots({ base, added }: AminoDotsProps) {
  const covered = Math.min(base + added, ESSENTIAL_AMINO_ACIDS);
  const dots = Array.from({ length: ESSENTIAL_AMINO_ACIDS }, (_, i) =>
    i < base ? 'base' : i < base + added ? 'added' : 'missing',
  );
  return (
    <span className="ds-dots" role="img" aria-label={`${covered} of ${ESSENTIAL_AMINO_ACIDS} essential amino acids covered`}>
      {dots.map((kind, i) => (
        <span key={i} className={`ds-dot ds-dot--${kind}`} />
      ))}
    </span>
  );
}
