import DarkModeToggle from '@/components/DarkModeToggle';
import { PanelLeftIcon } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';

export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="sticky top-0 z-50 p-4 w-full ">
      <div className="flex flex-row items-center justify-between">
        <button
          className="text-primary-900 dark:text-white bg-transparent font-medium rounded-lg text-sm"
          onClick={toggleSidebar}
        >
          <PanelLeftIcon />
        </button>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
