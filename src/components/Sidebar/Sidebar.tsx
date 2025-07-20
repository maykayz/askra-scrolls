import { UploadIcon, MessageCircle, FileIcon } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';
import { useFiles } from '@/hooks/useFiles';
import { useUploadModal } from '@/hooks/useUploadModal';
import { useEffect } from 'react';
import { useAllChats, useClearChatHistory } from '@/hooks/useChats';
import { useChatStore } from '@/store/useChatStore';

import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTE_CONFIG } from '@/constants/routes';

export default function AppSidebar() {
  const { files } = useFiles();
  const { setShowModal } = useUploadModal();
  const { fetchChats } = useAllChats();
  const { clearChatHistory } = useClearChatHistory();
  const { chatHistory } = useChatStore();
  const isMemoryEnabled = chatHistory.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  /* 
  	TODO: component too big - consider breaking it down into smaller components
  */

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
                    <a href={item.filename} className="text-black dark:text-white">
                      <FileIcon className="size-4" />
                      <span>{item.filename}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <Button
            variant="secondary"
            className="w-full bg-black text-white hover:bg-gray-800 rounded-4xl mt-4 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Upload File <UploadIcon className="ml-2 size-4" />
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="dark:text-white text-black">Chat</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory?.length === 0 && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to={ROUTE_CONFIG.CHAT} className="text-black dark:text-white">
                      <MessageCircle className="size-4" />
                      <span>No chat history found</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {chatHistory?.map(item => (
                <SidebarMenuItem key={item.chat_id}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={ROUTE_CONFIG.CHAT_DETAILS(item.chat_id)}
                      className="text-black dark:text-white"
                      key={item.chat_id}
                    >
                      <MessageCircle className="size-4" />
                      <span>{item.first_question}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Button
              variant="secondary"
              className="w-full bg-black text-white hover:bg-gray-800 rounded-4xl mt-4 cursor-pointer"
              onClick={() => {
                navigate(ROUTE_CONFIG.CHAT);
              }}
            >
              Start New Chat
              <MessageCircle className="ml-2 size-4" />
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="secondary"
          className="w-full bg-black text-white hover:bg-gray-800 rounded-4xl mt-4 cursor-pointer"
          onClick={clearChatHistory}
        >
          Clear Chat History
        </Button>
        <div className="flex items-center justify-center mt-4">
          <div
            className={`w-2 h-2 ${
              isMemoryEnabled ? 'bg-green-500' : 'bg-red-500'
            } rounded-lg mt-2 mb-2 mr-2`}
          />
          {isMemoryEnabled ? (
            <span className="text-green-500 text-sm">Memory Enabled</span>
          ) : (
            <span className="text-red-500 text-sm">Memory Disabled</span>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
