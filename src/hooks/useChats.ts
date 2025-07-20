import ChatService from '@/services/ChatService';
import { useChatStore } from '@/store/useChatStore';
import { useState } from 'react';
import { sendMessage } from '@/services/SocketService';
import { redirect } from 'react-router-dom';
import { ROUTE_CONFIG } from '@/constants/routes';
import { Message } from '@/types/chat';

export function useAllChats() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setChatHistory } = useChatStore();

  const fetchChats = async () => {
    try {
      setLoading(true);
      const response = await ChatService.fetchAllChats();
      setChatHistory(response.chats.reverse());
    } catch (err) {
      console.error('Failed to load chats', err);
      setError('Failed to load chats');
    } finally {
      setLoading(false);
    }
  };
  return { fetchChats, loading, error };
}

export function useCreateChat() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { chatHistory, setChatHistory } = useChatStore();

  const { setCurrentSessionId } = useChatStore();

  const createChat = async (message: string) => {
    try {
      setLoading(true);
      const response = await ChatService.createChat();
      setCurrentSessionId(response.chat_id);
      setChatHistory([
        ...chatHistory,
        {
          chat_id: response.chat_id,
          first_question: message,
          last_message_time: null,
          message_count: 0
        }
      ]);
      return response.chat_id;
    } catch (err) {
      console.error('Failed to create chat', err);
      setError('Failed to create chat');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createChat, loading, error };
}

export function useSendMessage() {
  const [loading] = useState<boolean>(false);
  const [error] = useState<string | null>(null);
  const { messages, setMessages } = useChatStore();

  const sendChatMessage = async (message: string, currentSessionId: string) => {
    const currentMessages = [
      ...messages,
      {
        id: crypto.randomUUID(),
        chat_id: currentSessionId || '',
        question: message,
        source: 'user',
        timestamp: new Date().toISOString(),
        user: 'Me',
        answer: '',
        is_typing: true
      } as Message
    ];
    sendMessage({
      question: message,
      chat_id: currentSessionId
    } as Message);
    setMessages(currentMessages);
  };
  return { sendChatMessage, loading, error };
}

export function useMessages() {
  const { messages, setMessages } = useChatStore();

  const fetchMessages = async (id: string) => {
    try {
      const response = await ChatService.fetchChatHistory(id);
      setMessages(response.messages);
      return response.messages;
    } catch (err) {
      console.error('Failed to fetch messages', err);
      throw err;
    }
  };

  return { messages, fetchMessages };
}

export function useClearChatHistory() {
  const { setChatHistory, setMessages } = useChatStore();

  const clearChatHistory = async () => {
    try {
      await ChatService.resetChatHistory();
      setMessages([]);
      setChatHistory([]);
      redirect(ROUTE_CONFIG.CHAT);
    } catch (err) {
      console.error('Failed to clear chat history', err);
    }
  };

  return { clearChatHistory };
}
