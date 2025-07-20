import { useEffect, useRef, useState } from 'react';
import {
  initializeConnection,
  disconnectSocket,
  sendMessage,
  onMessage,
  isConnected
} from '@/services/SocketService';
import { useChatStore } from '@/store/useChatStore';
import { Message } from '@/types/chat';

export const useSocket = () => {
  const isInitialized = useRef(false);
  const { messages, setMessages } = useChatStore();
  const [lastChunk, setLastChunk] = useState(null);
  const [lastMessage, setLastMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!isInitialized.current) {
      initializeConnection()
        .then(() => {
          console.log(isConnected());
        })
        .catch((error) => {
          console.error('Failed to establish WebSocket connection:', error);
        });
      isInitialized.current = true;
    }
    return () => {
      disconnectSocket();
    };
  }, []);

  const handleMessage = (data: any) => {
    if (data && data.type === 'chunk' && data.content !== lastChunk) {
      setLastChunk(data.content);
      const isLastMessage = messages[messages.length - 1]?.is_typing;
      const messagesWithoutLast = messages.slice(0, -1);
      if (isLastMessage) {
        const updatedMessages = [
          ...messagesWithoutLast,
          {
            ...messages[messages.length - 1],
            answer: messages[messages.length - 1].answer + data.content,
            is_typing: !data.is_final
          }
        ];
        setMessages(updatedMessages);
      } else {
        setLastMessage((prev) => ({
          ...prev,
          answer: prev ? prev.answer + data.content : data.content
        }));
        const newMessage: Message = {
          question: lastMessage?.question || '',
          answer: data.content,
          source: 'websocket',
          timestamp: new Date().toISOString(),
          user: 'Agent',
          is_typing: !data.is_final
        };
        setMessages([...messages, newMessage]);
      }
    }
  };

  useEffect(() => {
    onMessage(handleMessage);
  }, [messages, lastChunk, lastMessage]);

  return {
    initializeConnection,
    disconnectSocket,
    sendMessage,
    onMessage,
    isConnected
  };
};

export default useSocket;
