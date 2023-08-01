import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import styles from './layout.module.scss';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'imnotmoon blog',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <body className={classNames(inter.className, styles.root)}>{children}</body>
  </html>
);

export default RootLayout;
