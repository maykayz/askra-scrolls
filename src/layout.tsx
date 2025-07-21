import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full h-full">{children}</div>
    </SidebarProvider>
  );
}
