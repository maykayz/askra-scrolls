// import {
// 	Sidebar as SidebarComponent,
// 	SidebarContent,
// 	SidebarFooter,
// 	SidebarGroup,
// 	SidebarHeader,
// 	SidebarTrigger,
// } from "@/components/ui/sidebar";

// export default function Sidebar() {
// 	return (
// 		<div className="">
// 			<SidebarComponent className="w-80 h-full dark:bg-slate-900 dark:text-white bg-gray-100 text-black">
// 				<SidebarHeader className="flex items-center justify-between row p-4">
// 					<h2 className="text-lg font-semibold">Chat</h2>
// 					<SidebarTrigger />
// 				</SidebarHeader>
// 				{/* <SidebarFooter /> */}
// 			</SidebarComponent>
// 		</div>
// 	);
// }

import {Calendar, MessageSquare, Inbox, Search, Settings, UploadIcon, MessageCircle, FileIcon} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import {Button} from "@/components/ui/button";
import { useFiles } from "@/hooks/useFiles";

const items = [
	{
		title: "How to use arc-fusion-chat",
		url: "#",
		icon: MessageCircle,
	},
];

const files = [
	{
		name: "File 1",
		url: "#",
	},
	{
		name: "File 2",
		url: "#",
	},
];


export default function AppSidebar() {
	const { files, loading, error } = useFiles();
	return (
		<Sidebar
			variant="inset"
			className=" 
			
			dark:bg-slate-900 bg-gray-100
			dark:text-white  text-black border-r border-gray-200 dark:border-gray-700"
		>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="dark:text-white text-black">
						Uploaded Files
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{files?.map((item, index) => (
								<SidebarMenuItem key={index}>
									<SidebarMenuButton asChild>
										<a href={item.url} className="text-black dark:text-white">
											<FileIcon className="size-4" />
											<span>{item.name}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<Button variant="secondary" className="w-full bg-black text-white hover:bg-gray-800 rounded-4xl mt-4 cursor-pointer">
						Upload File <UploadIcon className="ml-2 size-4" />
					</Button>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel className="dark:text-white text-black">
						Chat
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url} className="text-black dark:text-white">
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
