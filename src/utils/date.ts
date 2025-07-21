export const checkIfLessThanOneMinuteOld = (timestamp?: string): boolean => {
  if (!timestamp) return false;
  const messageTime = new Date(timestamp).getTime();
  const currentTime = Date.now();
  return messageTime > currentTime - 1000 * 1; // Check if the message is within the last 1 minute
};
