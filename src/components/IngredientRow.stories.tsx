import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { IngredientRow } from './IngredientRow';

const meta: Meta = { title: 'Patterns/Pairs list' };
export default meta;

// Sample data only, not real nutrition scores.
export const PairsFor: StoryObj = {
  render: () => (
    <Card title="Pairs for Rajma">
      <IngredientRow rank={1} name="Chawal" base={6} added={3} />
      <IngredientRow rank={2} name="Jowar" base={6} added={2} />
      <IngredientRow rank={3} name="Til" base={6} added={1} />
    </Card>
  ),
};
