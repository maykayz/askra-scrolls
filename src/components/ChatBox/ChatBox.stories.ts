import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatBox from './ChatBox';

const meta = {
  component: ChatBox,
} satisfies Meta<typeof ChatBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: 'ChatBox',
	args: {}
}