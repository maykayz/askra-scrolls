import ChatBox from '@/features/chat/ChatBox/ChatBox';
import Mascot from '@/components/Mascot/Mascot';
import { useMessages } from '@/hooks/useChats';
import { useChatStore } from '@/store/useChatStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from '@/features/chat/Message/Message';
import Navbar from '@/components/Navbar';

export default function ChatPanel() {
  const { messages, currentSessionId, setCurrentSessionId, setMessages } = useChatStore();
  const { fetchMessages } = useMessages();
  const { id } = useParams<{ id: string }>();

  const mascotState = messages.length === 0 ? 'not-found' : null;

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
    <div className="w-full h-full text-white relative">
      <div className="">
        <Navbar />
        {messages.length === 0 && (
          <div className="mt-[40vh]">
            <Mascot state={mascotState} animate="pulse" />
          </div>
        )}
        <div className="px-24 h-full flex flex-col items-end justify-end">
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
      </div>
      <div
        className={`sticky left-0 right-0 bottom-10 w-3/4 mx-auto transition-all duration-300
        bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 p-4
        `}>
        <ChatBox />
      </div>
    </div>
  );
}
