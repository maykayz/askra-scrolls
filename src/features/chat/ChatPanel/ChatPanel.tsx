import ChatBox from '@/features/chat/ChatBox/ChatBox';
import Mascot from '@/components/Mascot/Mascot';
import { useMessages } from '@/hooks/useChats';
import { useChatStore } from '@/store/useChatStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from '@/features/chat/Message/Message';

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
  }, [id, currentSessionId, setCurrentSessionId, fetchMessages, setMessages]);

  return (
    <div className="w-full h-full text-white p-16 relative">
      <div className="w-full h-full md:pb-[100px] pb-[150px]">
        <div className="w-full h-full flex flex-col items-end justify-end">
          <Mascot state={mascotState} />
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
      </div>
      <div
        className={`sticky ${
          messages.length ? 'bottom-10 left-10 right-10' : 'bottom-2/5 right-0 left-0 top-0'
        } w-3/4 mx-auto transition-all duration-300`}
      >
        <ChatBox />
      </div>
    </div>
  );
}
