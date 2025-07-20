import type { Meta, StoryObj } from '@storybook/react-vite';

import UploadIcon from './UploadIcon';

const meta = {
  title: 'Components/UploadIcon',
  component: UploadIcon,
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
} satisfies Meta<typeof UploadIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    fill: 'currentColor',
    stroke: 'currentColor',
    strokeWidth: '0.1',
    className: 'mt-8 text-primary-500'
  }
};

export const Primary: Story = {
  name: 'Color ',
  args: {
    fill: '#f00',
    stroke: '#f00',
    strokeWidth: '0.4',
    className: 'mt-8 text-primary-500'
  }
};
