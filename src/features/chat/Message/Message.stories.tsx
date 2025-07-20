import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';

import MessageComponent from './Message';

const meta = {
  title: 'Components/Message',
  component: MessageComponent,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} satisfies Meta<typeof MessageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    message: {
      id: '1',
      timestamp: new Date().toISOString(),
      is_typing: false,
      question: 'What is this document about?',
      answer:
        'This document is a Storybook story for the Message component. It demonstrates how to display a chat message with a typing indicator and timestamp. It includes a question and an answer, and it checks if the message is less than one minute old to determine how to display the answer. The component uses TypeAnimation for animated text display when the message is new. 	 It also includes a loading indicator when the message is being typed. The component is styled with Tailwind CSS classes for a modern look. It is part of a chat application built with React and TypeScript. 	 ',
      source: 'user'
    }
  }
};
