const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchChats = async () => {
  const response = await fetch(`${API_URL}/api/chats`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

const ChatService = {
  getChats: fetchChats,
};

export default ChatService;
