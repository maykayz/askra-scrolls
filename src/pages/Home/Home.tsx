import Sidebar from "@/components/Sidebar/Sidebar";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
	return (
		<div className="w-full h-full bg-gradient-to-bl from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-700 min-h-screen flex items-center justify-center gradient-transition">
			{/* Sidebar */}
			<Sidebar />
			{/* main Panel */}
			<ChatPanel />
		</div>
	);
}
