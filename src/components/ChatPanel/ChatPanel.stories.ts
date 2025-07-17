import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatPanel from './ChatPanel';

const meta = {
  component: ChatPanel,
} satisfies Meta<typeof ChatPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: 'ChatPanel',
	args: {}
}