import type { Meta, StoryObj } from '@storybook/react-vite';

import FileUpload from './FileUpload';

const meta = {
  title: 'Features/FileUpload',
  component: FileUpload
} satisfies Meta<typeof FileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
