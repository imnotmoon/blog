import { differenceInDays, format, formatDistance } from 'date-fns';

export const formatDate = (date: Date) => {
  const diff = differenceInDays(Date.now(), date);
  return diff > 10
    ? format(date, 'yyyy.MM.dd HH:mm')
    : formatDistance(Date.now(), date, { addSuffix: true });
};
