import {useState} from "react";

import {Input} from "@/components/ui/input";
import {PlaneIcon, Send} from "lucide-react";
import {Button} from "../ui/button";

export default function ChatBox() {
	const [message, setMessage] = useState("");

	const handleSend = () => {
		if (message.trim()) {
			console.log("Message sent:", message);
			setMessage("");
		}
	};

	return (
		<div className="flex flex-row items-center justify-center rounded-2xl">
			<Input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type your message..."
				className="flex-grow mr-2 border-0 focus:border-0 focus:ring-0 focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-4xl shadow-sm"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSend();
						e.preventDefault();
					}
				}}
			/>

			<Button
				onClick={handleSend}
				variant="secondary"
				className="bg-gray-100 dark:bg-black hover:scale-110 transition-transform duration-200"
			>
				<Send className="text-primary-900 dark:text-gray-100" />
			</Button>
		</div>
	);
}
