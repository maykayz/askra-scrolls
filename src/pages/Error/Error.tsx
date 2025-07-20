import BotImage from '@/assets/images/bot.svg';

export default function Error() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={BotImage} alt="Error" className="w-32 h-32 mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
    </div>
  );
}
