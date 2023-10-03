import Image from 'next/image';
import styles from './PostCard.module.scss';
import { Post } from '@/components/post/Post.hooks';
import { formatDate } from '@/utils/date';

export type PostCardProps = Post;
export const PostCard = ({ name, thumbnail }: PostCardProps) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <Image src={thumbnail} alt={name} className={styles.thumbnail} width={250} height={400} />
    </div>
    <div className={styles.body}>
      <p className={styles.date}>{formatDate(new Date())}</p>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.description}>{'asdfasdf'}</p>
    </div>
  </div>
);
