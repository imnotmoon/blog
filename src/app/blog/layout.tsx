import { PropsWithChildren } from 'react';

export type BlogLayoutProps = PropsWithChildren;

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <html lang="ko">
    <body>{children}</body>
  </html>
);

export default BlogLayout;
