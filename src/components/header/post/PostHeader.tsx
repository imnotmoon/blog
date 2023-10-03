import styles from './PostHeader.module.scss';
import { ReactNode } from 'react';

export type PostHeaderProps = {
  title: ReactNode;
};

export const PostHeader = ({ title }: PostHeaderProps) => (
  <div className={styles.root}>
    <h1 className={styles.title}>{title}</h1>
  </div>
);
