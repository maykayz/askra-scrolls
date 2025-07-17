import ChatBox from "@/components/ChatBox/ChatBox";
import {TypeAnimation} from "react-type-animation";

export default function ChatPanel() {
	const chats = [
		{
			id: 1,
			message: "Hello, how are you?",
			timestamp: "2023-10-01 10:00 AM",
			user: "User 1",
			avatar: "https://avatar.iran.liara.run/public/boy?username=Ash",
		},
		{
			id: 2,
			message: "I am fine, thank you! How about you?",
			timestamp: "2023-10-01 10:05 AM",
			user: "User 2",
			avatar: "https://avatar.iran.liara.run/public/98",
		},
		{
			id: 3,
			message: "I am doing well, thanks for asking!",
			timestamp: "2023-10-01 10:10 AM",
			user: "User 1",
			avatar: "https://avatar.iran.liara.run/public/boy?username=Ash",
		},
		{
			id: 4,
			message: "What are you up to today?",
			timestamp: "2023-10-01 10:15 AM",
			user: "User 2",
			avatar: "https://avatar.iran.liara.run/public/98",
		},
	];

	const OtherChat = ({user, message, avatar, showAnimation, isTyping}) => (
		<div className="flex items-center mb-6 w-full">
			<img src={avatar} alt={user} className="w-10 h-10 rounded-full mr-3" />
			<div className=" dark:bg-slate-700 bg-slate-100 p-3 rounded-lg shadow-md">
				{showAnimation ? (
					<>
						<TypeAnimation
							sequence={[`${message}`, 1000]}
							repeat={0}
							cursor={false}
							className="mt-1 text-slate-950 dark:text-white"
						/>
					</>
				) : (
					<p className="mt-1 text-slate-950 dark:text-white mb-0">{message}</p>
				)}
			</div>
		</div>
	);
	const UserChat = ({user, message, avatar}) => (
		<div className="flex row justify-end items-center mb-6">
			<div className=" bg-slate-100 dark:bg-slate-700 p-3 rounded-lg shadow-md">
				<p className="mt-1 text-slate-950 dark:text-white">{message}</p>
			</div>
			<img src={avatar} alt={user} className="w-10 h-10 rounded-full ml-3" />
		</div>
	);
	return (
		<div className="w-full h-full text-white p-16 relative">
			<div className="w-full h-full md:pb-[200px] pb-[250px]">
				<div className="w-full h-full overflow-y-auto flex flex-col items-end justify-end">
					{chats.map((chat, index) =>
						chat.user === "User 1" ? (
							<UserChat
								key={chat.id}
								user={chat.user}
								message={chat.message}
								avatar={chat.avatar}
							/>
						) : (
							<OtherChat
								key={chat.id}
								user={chat.user}
								message={chat.message}
								avatar={chat.avatar}
								showAnimation={index === chats.length - 1}
								isTyping={true}
							/>
						)
					)}
				</div>
			</div>
			<div className="absolute bottom-10 left-10 right-10 rounded-2xl p-1 dark:bg-gray-900 dark:text-white bg-gray-300 text-gray-800">
				<ChatBox />
			</div>
		</div>
	);
}
