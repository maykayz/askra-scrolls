import type { Meta, StoryObj } from '@storybook/react-vite';

import DarkModeToggle from './DarkModeToggle';

const meta = {
  component: DarkModeToggle,
} satisfies Meta<typeof DarkModeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: 'DarkModeToggle',
	args: {}
}