import type { ReactNode } from 'react';

export type BadgeVariant = 'complete' | 'partial';

export interface BadgeProps {
  variant: BadgeVariant;
  icon?: ReactNode;
  children: ReactNode;
}

export function Badge({ variant, icon, children }: BadgeProps) {
  return (
    <span className={`ds-badge ds-badge--${variant}`}>
      {icon}
      {children}
    </span>
  );
}

const BoltIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** Shown when a pair covers all nine essential amino acids. */
export function CompleteBadge() {
  return <Badge variant="complete" icon={<BoltIcon />}>Complete</Badge>;
}

/** Shown when a pair adds some essential amino acids but not all. */
export function PartialBadge({ added }: { added: number }) {
  return <Badge variant="partial" icon={<PlusIcon />}>{`+${added} EAA`}</Badge>;
}
