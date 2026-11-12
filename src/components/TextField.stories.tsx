import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = { title: 'Components/TextField', component: TextField };
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = { args: { label: 'Ingredient', hint: 'For example, Rajma', placeholder: 'Type one ingredient' } };
export const WithError: Story = { args: { label: 'Ingredient', defaultValue: 'xyz', error: 'We could not find that ingredient. Try another.' } };
export const Disabled: Story = { args: { label: 'Ingredient', disabled: true } };
