import ChatBox from '@/features/chat/ChatBox/ChatBox';
import Mascot from '@/components/Mascot/Mascot';
import { useMessages } from '@/hooks/useChats';
import { useChatStore } from '@/store/useChatStore';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Message from '@/features/chat/Message/Message';
import Navbar from '@/components/Navbar';

export default function ChatPanel() {
  const { messages, currentSessionId, setCurrentSessionId, setMessages } = useChatStore();
  const { fetchMessages } = useMessages();
  const { id } = useParams<{ id: string }>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mascotState = messages.length === 0 ? 'not-found' : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!id) {
      setMessages([]);
    }
    if (id !== currentSessionId) {
      setCurrentSessionId(id);
      fetchMessages(id);
    }
  }, [id]);

  return (
    <div className="w-full h-screen text-white relative">
      <div className="h-full overflow-auto">
        <Navbar />
        {messages.length === 0 && (
          <div className="mt-[30vh]">
            <Mascot state={mascotState} animate="pulse" />
          </div>
        )}
        <div className="px-24 flex flex-col items-end justify-end pb-32">
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 mb-10 transition-all duration-300
        bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 p-4
        `}
      >
        <ChatBox />
      </div>
    </div>
  );
}
