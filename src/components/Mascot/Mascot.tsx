import BotImage from '@/assets/images/bot.svg';

interface MascotProps {
  state: 'loading' | 'idle' | 'error' | 'not-found';
}

export default function Mascot({ state }: MascotProps) {
  let label: string;

  if (!state) {
    return null;
  }

  switch (state) {
    case 'loading':
      label = 'One moment please...!';
      break;
    case 'idle':
      label = 'Ready to chat!';
      break;
    case 'error':
      label = 'Something went wrong!';
      break;
    case 'not-found':
      label = 'Sorry! No chats found.';
      break;
    default:
      label = 'Ready to chat!';
      break;
  }

  return (
    <div className="flex items-center flex-col justify-center w-full h-full">
      <div>
        <img src={BotImage} alt="No chats" className="w-24 h-24" />
      </div>
      <p className="text-slate-800 dark:text-slate-500 mt-4">{label}</p>
    </div>
  );
}
