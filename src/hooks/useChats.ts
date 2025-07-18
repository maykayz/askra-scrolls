import ChatService from "@/services/ChatService";
import {useEffect, useState} from "react";

export interface Chat {
	id: string;
	user: string;
	message: string;
	timestamp: string;
	avatar: string;
	isTyping?: boolean; // Optional field for typing indicator
}

export function useChats() {
	const [chats, setChats] = useState<Chat[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchChats() {
			try {
				setLoading(true);
				const response = await ChatService.getChats();
				setChats(response.data);
			} catch (err) {
				setError("Failed to load chats");
			} finally {
				setLoading(false);
			}
		}

		fetchChats();
	}, []);

	return {chats, loading, error};
}
