import Sidebar from "@/components/Sidebar/Sidebar";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
	return (
		<div className="w-full h-full bg-gradient-to-l from-white to-white dark:to-primary-950 dark:from-slate-900 min-h-screen flex items-center justify-center gradient-transition">
			{/* Sidebar */}
			<Sidebar />
			{/* main Panel */}
			<ChatPanel />
		</div>
	);
}
