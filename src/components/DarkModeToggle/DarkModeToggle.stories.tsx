import type { Meta, StoryObj } from '@storybook/react-vite';

import DarkModeToggle from './DarkModeToggle';

const meta = {
  title: 'Components/DarkModeToggle',
  component: DarkModeToggle,
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
} satisfies Meta<typeof DarkModeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    className: 'p-4 rounded-full bg-gray-200 dark:bg-gray-800',
    width: 24,
    height: 24
  }
};
