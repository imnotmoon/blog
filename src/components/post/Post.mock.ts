import thumbnail from './thumbnail.png';
import { Post } from '@/components/post/Post.hooks';

export const post: Post = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description:
    'Vestibulum vitae consequat justo. Nam tempor tincidunt leo eleifend faucibus. Maecenas id maximus dui. Ut euismod gravida erat, ac semper erat molestie ut.',
  thumbnailUrl: thumbnail,
  uploadAt: new Date(),
};

export const postList: Post[] = new Array(10).fill(post).map((post, idx) => ({
  ...post,
  id: idx,
}));
