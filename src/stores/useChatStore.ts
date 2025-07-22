import { create } from 'zustand';

import { ChatStore } from '@/types/chat';

const useChatStore = create<ChatStore>(set => ({
  chatHistory: [],
  setChatHistory: history => set({ chatHistory: history }),
  currentSessionId: undefined,
  setCurrentSessionId: id => set({ currentSessionId: id }),
  messages: [],
  setMessages: messages => set({ messages: messages })
}));

export { useChatStore };
