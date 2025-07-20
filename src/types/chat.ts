export type Chat = {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  avatar: string;
  isTyping?: boolean; // Optional field for typing indicator
};

export type ChatInfo = {
  chat_id: string;
  first_question: string | null;
  last_message_time: string | null;
  message_count: number;
};

export type ChatHistory = ChatInfo[];

export type Message = {
  id?: string;
  chat_id?: string;
  question: string;
  answer: string;
  source: string;
  timestamp?: string;
  user?: 'Me' | 'Agent';
  is_typing?: boolean;
};

export type ChatStore = {
  chatHistory: ChatHistory;
  setChatHistory: (history: ChatHistory) => void;
  currentSessionId?: string;
  setCurrentSessionId?: (id: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};
