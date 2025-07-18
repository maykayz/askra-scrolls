import ChatBox from "@/components/ChatBox/ChatBox";
import {TypeAnimation} from "react-type-animation";
import Mascot from "../Mascot/Mascot";
import {useChats} from "@/hooks/useChats";

export default function ChatPanel() {
	const {chats, loading, error} = useChats();

	console.log("Chats:", chats);

	const mascotState = loading
		? "loading"
		: chats.length === 0
		? "not-found"
		: error ? "error"
		: null;

	const OtherChat = ({user, message, avatar, showAnimation, isTyping}) => (
		<div className="flex items-center mb-6 w-full">
			<img src={avatar} alt={user} className="w-10 h-10 rounded-full mr-3" />
			<div className=" dark:bg-slate-700 bg-slate-100 px-6 py-2 rounded-4xl shadow-md">
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
			<div className=" bg-slate-100 dark:bg-slate-700 px-6 py-2 rounded-4xl shadow-md">
				<p className="mt-1 text-slate-950 dark:text-white mb-0">{message}</p>
			</div>
			<img src={avatar} alt={user} className="w-10 h-10 rounded-full ml-3" />
		</div>
	);
	return (
		<div className="w-full h-full text-white p-16 relative">
			<div className="w-full h-full md:pb-[200px] pb-[250px]">
				<div className="w-full h-full overflow-y-auto flex flex-col items-end justify-end">
					<Mascot
						state={
							mascotState
						}
					/>
					{/* {chats.map((chat, index) =>
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
					)} */}
				</div>
			</div>
			<div
				className={`absolute ${
					chats.length
						? "bottom-10 left-10 right-10"
						: "bottom-0 right-0 left-0 top-0 translate-y-1/2"
				} w-1/3 mx-auto transition-all duration-300`}
			>
				<ChatBox />
			</div>
		</div>
	);
}
