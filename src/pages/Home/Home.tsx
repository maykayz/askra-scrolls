import Sidebar from '@/components/Sidebar';
import ChatPanel from '@/features/chat/ChatPanel';
import { useUploadModal } from '@/hooks/useUploadModal';

export default function Home() {
  const { UploadModal } = useUploadModal();

  return (
    <div className="w-full h-screen overflow-y-scroll bg-gradient-to-bl from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-700 min-h-screen flex items-center justify-center gradient-transition">
      <Sidebar />
      <ChatPanel />
      <UploadModal />
    </div>
  );
}
