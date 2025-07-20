import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';

import Mascot from './Mascot';

const meta = {
  title: 'Components/Mascot',
  component: Mascot,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Mascot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    state: 'idle'
  }
};

export const Error: Story = {
  name: 'Error',
  args: {
    state: 'error'
  }
};

export const NotFound: Story = {
  name: 'NotFound',
  args: {
    state: 'not-found'
  }
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    state: 'loading'
  }
};
