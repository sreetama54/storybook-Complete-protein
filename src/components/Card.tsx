import type { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <section className="ds-card">
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}
