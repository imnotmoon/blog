import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => (
  <nav className={styles.root}>
    <div className={styles.logo}>
      <Link href="/">imnotmoon</Link>
    </div>
    <div className={styles.navigation}>
      <Link href="/blog">blog</Link>
      <Link href="/tag">tag</Link>
    </div>
  </nav>
);
