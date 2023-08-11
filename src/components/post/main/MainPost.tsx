import { Post } from '@/components/post/Post.hooks';
import styles from './MainPost.module.scss';
import Image from 'next/image';
import { formatDate } from '@/utils/date';

export type MainPostProps = Post;

export const MainPost = ({ title, description, thumbnailUrl, uploadAt }: MainPostProps) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <p className={styles.date}>{formatDate(uploadAt)}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.body}>
      <Image src={thumbnailUrl} alt={title} className={styles.thumbnail} width={500} height={600} />
    </div>
  </div>
);
