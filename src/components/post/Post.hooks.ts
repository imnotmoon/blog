import { StaticImageData } from 'next/image';

export type Post = {
  id: number;
  title: string;
  description: string;
  // TODO: StaticImageData is only for mocking.
  thumbnailUrl: string | StaticImageData;
  uploadAt: Date;
};
