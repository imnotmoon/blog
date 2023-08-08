import thumbnail from './thumbnail.png';
import { Post } from '@/components/post/Post.hooks';

export const post: Post = {
  id: 1,
  title: 'test',
  description: 'test test test test test test',
  thumbnailUrl: thumbnail,
  uploadAt: new Date(),
};

export const postList: Post[] = new Array(10).fill(post).map((post, idx) => ({
  ...post,
  id: idx,
}));
