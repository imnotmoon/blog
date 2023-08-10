import { differenceInDays, format, formatDistance } from 'date-fns';

<<<<<<< HEAD
export const formatDate = (d: Date): string => {
  const now = Date.now();
  const diff = differenceInDays(now, d);
  return diff > 10 ? format(d, 'yyyy.MM.dd') : formatDistance(d, now, { addSuffix: true });
=======
export const formatDate = (date: Date) => {
  const diff = differenceInDays(Date.now(), date);
  return diff > 10
    ? format(date, 'yyyy.MM.dd HH:mm')
    : formatDistance(Date.now(), date, { addSuffix: true });
>>>>>>> 6723e46 (Add styles to MainPost)
};
