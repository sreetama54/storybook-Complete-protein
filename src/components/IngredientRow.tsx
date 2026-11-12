import { AminoDots, ESSENTIAL_AMINO_ACIDS } from './AminoDots';
import { CompleteBadge, PartialBadge } from './Badge';

export interface IngredientRowProps {
  rank: number;
  name: string;
  base: number;
  added: number;
}

export function IngredientRow({ rank, name, base, added }: IngredientRowProps) {
  const complete = base + added >= ESSENTIAL_AMINO_ACIDS;
  return (
    <div className="ds-row">
      <span className="ds-row__rank">{rank}</span>
      <span className="ds-row__name">{name}</span>
      <AminoDots base={base} added={added} />
      {complete ? <CompleteBadge /> : <PartialBadge added={added} />}
    </div>
  );
}
