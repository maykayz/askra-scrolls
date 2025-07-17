import Navbar from "@/components/Navbar";
import {SidebarProvider} from "../ui/sidebar";

export default function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<SidebarProvider>
			<div className="w-full h-full">
				<Navbar />
				{children}
			</div>
		</SidebarProvider>
	);
}
