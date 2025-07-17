import React, { useState } from 'react';

export default function ChatBox() {
	const [message, setMessage] = useState('');

	const handleSend = () => {
		if (message.trim()) {
			console.log('Message sent:', message);
			setMessage('');
		}
	};

	return (
		<div className="flex flex-row items-center justify-center">
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Ask me anything about your document..."
				className="w-full p-2 border border-transparent focus:border-transparent rounded"
			/>
			<button
				onClick={handleSend}
				className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
			>
				Send
			</button>
		</div>
	);
}