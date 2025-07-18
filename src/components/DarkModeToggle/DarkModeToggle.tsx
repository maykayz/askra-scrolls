import { useDarkMode } from '@/hooks/useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      className="fixed top-4 right-4 z-50"
      sunColor="#f59e0b"
      moonColor="#fafafa"
    />
  )
}
