import type { Meta, StoryObj } from '@storybook/react-vite';

import FileView from './FileView';

const meta = {
  title: 'Features/FileView',
  component: FileView
} satisfies Meta<typeof FileView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    file: {
      name: 'document.pdf',
      size: 112023,
      type: 'text/plain',
      lastModified: new Date()
    } as unknown as File
  }
};

export const WithDeleteButton: Story = {
  args: {
    file: {
      name: 'example.txt',
      size: 112023,
      type: 'text/plain',
      lastModified: new Date()
    } as unknown as File,
    onDelete: () => console.log('File deleted')
  }
};
