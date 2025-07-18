interface MascotProps {
	state: "loading" | "idle" | "error" | "not-found";
}

export default function Mascot({
	state
}: MascotProps) {
	let label: String;

	if(!state) {
		return null;
	}

	switch (state) {
		case "loading":
			label = "One moment please...!";
			break;
		case "idle":
			label = "Ready to chat!";
			break;
		case "error":
			label = "Something went wrong!";
			break;
		case "not-found":
			label = "No chats available";
			break;
		default:
			label = "Ready to chat!";
			break;
	}

	return (
		<div className="flex items-center justify-center w-full h-full">
			<img
				src="./src/assets/images/bot.svg"
				alt="No chats"
				className="w-24 h-24"
			/>
			<p className="text-slate-500 dark:text-slate-300 mt-4">
				{label}
			</p>
		</div>
	);
}
