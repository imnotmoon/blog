import { postList } from '@/components/post/Post.mock';
import { PostCard } from '@/components/post/card/PostCard';
import styles from './PostList.module.scss';
import { getPosts } from '@/components/post/Post.hooks';

export type PostListProps = {
  maxLength?: number;
};

export const PostList = async ({ maxLength }: PostListProps) => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <ul className={styles.root}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};
