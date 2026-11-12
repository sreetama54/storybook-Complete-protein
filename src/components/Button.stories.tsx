import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = { title: 'Components/Button', component: Button };
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Find pairs' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Back' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Clear' } };
export const Disabled: Story = { args: { variant: 'primary', children: 'Find pairs', disabled: true } };
