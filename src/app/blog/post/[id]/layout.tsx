import { PropsWithChildren } from 'react';

export type PostLayoutProps = PropsWithChildren;

const PostLayout = ({ children }: PostLayoutProps) => (
  <html lang="ko">
    <body>{children}</body>
  </html>
);

export default PostLayout;
