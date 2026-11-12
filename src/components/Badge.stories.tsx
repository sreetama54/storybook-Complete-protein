import type { Meta, StoryObj } from '@storybook/react';
import { CompleteBadge, PartialBadge } from './Badge';

const meta: Meta = { title: 'Components/Badge' };
export default meta;

export const Complete: StoryObj = { render: () => <CompleteBadge /> };
export const Partial: StoryObj = { render: () => <PartialBadge added={2} /> };
