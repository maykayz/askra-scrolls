import { TypeAnimation } from 'react-type-animation';
import { Atom } from 'react-loading-indicators';

import { checkIfLessThanOneMinuteOld } from '@/utils/date';
import type { Message } from '@/types/chat';

type MessageProps = {
  message: Message;
};

export default function Message({ message }: MessageProps) {
  const isLoading = message.is_typing;
  const isNewMessage = checkIfLessThanOneMinuteOld(message.timestamp);

  const Loading = () => (
    <div className="-scale-40">
      <Atom color="#fefefe" size="small" />
    </div>
  );
  const AnswerWithAnimation = () => (
    <TypeAnimation
      sequence={[message?.answer, 100]}
      wrapper="p"
      className="mt-1 text-slate-950 dark:text-white mb-0"
      repeat={0}
      cursor={false}
      speed={99}
    />
  );
  const Answer = () => <p className="mt-1 text-slate-950 dark:text-white mb-0">{message.answer}</p>;

  const Question = () => (
    <div className="flex row w-full justify-end items-center mb-6">
      <div className=" bg-slate-200 dark:bg-slate-700 px-6 py-2 rounded-lg shadow-md ml-8">
        <p className="mt-1 text-slate-950 dark:text-white mb-0">{message.question}</p>
      </div>
    </div>
  );

  return (
    <>
      <Question />
      <div className="flex row w-full justify-start items-center mb-6">
        {isLoading ? (
          <Loading />
        ) : (
          // isNewMessage ? <AnswerWithAnimation /> :
          <Answer />
        )}
      </div>
    </>
  );
}
