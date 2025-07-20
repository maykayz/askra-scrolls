import type { Meta, StoryObj } from '@storybook/react-vite';

import Sidebar from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    state: 'idle'
  }
};
