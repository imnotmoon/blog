import { differenceInDays, format, formatDistance } from 'date-fns';

export const formatDate = (d: Date): string => {
  const now = Date.now();
  const diff = differenceInDays(now, d);
  return diff > 10 ? format(d, 'yyyy.MM.dd') : formatDistance(d, now, { addSuffix: true });
};
