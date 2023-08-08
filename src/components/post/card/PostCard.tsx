import Image from 'next/image';
import styles from './PostCard.module.scss';

export type PostCardProps = {
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadAt: Date;
};

export const PostCard = ({ title, description, thumbnailUrl, uploadAt }: PostCardProps) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <Image src={thumbnailUrl} alt={title} className={styles.thumbnail} width={250} height={400} />
    </div>
    <div className={styles.body}>
      <p>{uploadAt.toString()}</p>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);
