import { PropsWithChildren } from 'react';

export type TagLayoutProps = PropsWithChildren;

const TagLayout = ({ children }: TagLayoutProps) => (
  <html lang="ko">
    <body>{children}</body>
  </html>
);

export default TagLayout;
