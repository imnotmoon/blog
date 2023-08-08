import { postList } from '@/components/post/Post.mock';
import { PostCard } from '@/components/post/card/PostCard';
import styles from './PostList.module.scss';

// TODO: remove
const mockData = postList;

export type PostListProps = {
  maxLength?: number;
};

export const PostList = ({ maxLength }: PostListProps) => {
  const posts = maxLength ? mockData.slice(0, maxLength) : mockData;
  return (
    <ul className={styles.root}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};
