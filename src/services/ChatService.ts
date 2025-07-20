import { API_URL } from '@/constants/api';

export const fetchChatHistory = async (id: String) => {
  const response = await fetch(`${API_URL}/api/chat/${id}`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const createChat = async () => {
  const response = await fetch(`${API_URL}/api/chat/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const fetchAllChats = async () => {
  const response = await fetch(`${API_URL}/api/chat`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const sendMessage = async (message: string) => {
  const response = await fetch(`${API_URL}/api/chat/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: message })
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const resetChatHistory = async () => {
  const response = await fetch(`${API_URL}/api/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

const ChatService = {
  fetchChatHistory,
  fetchAllChats,
  sendMessage,
  createChat,
  resetChatHistory
};

export default ChatService;
