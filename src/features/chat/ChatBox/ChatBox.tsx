import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatStore } from '@/store/useChatStore';
import { useCreateChat, useSendMessage } from '@/hooks/useChats';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONFIG } from '@/constants/routes';

export default function ChatBox() {
  const [message, setMessage] = useState('');

  const { currentSessionId } = useChatStore();
  const { createChat } = useCreateChat();
  const { sendChatMessage } = useSendMessage();

  const navigate = useNavigate();

  const handleSend = async () => {
    if (!currentSessionId) {
      const chatId = await createChat(message);
      navigate(ROUTE_CONFIG.CHAT_DETAILS(chatId));
      sendChatMessage(message, chatId);
    } else {
      sendChatMessage(message, currentSessionId);
    }
    setMessage('');
  };

  return (
    <div className="flex flex-row items-center justify-center rounded-2xl ">
      <Input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Ask anything you want to know ..."
        className="flex-grow mr-2 border-0 shadow-none text-gray-900 dark:text-gray-200 rounded-lg ring-0 focus-visible:ring-0 "
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSend();
            e.preventDefault();
          }
        }}
      />

      <Button
        onClick={handleSend}
        variant="secondary"
        className="bg-gray-100 dark:bg-black hover:scale-120 transition-transform duration-200 cursor-pointer"
      >
        <Send className="text-primary-900 dark:text-gray-100" />
      </Button>
    </div>
  );
}
