import { PropsWithChildren } from 'react';

export type SearchLayoutProps = PropsWithChildren;

const SearchLayout = ({ children }: SearchLayoutProps) => (
  <html lang="ko">
    <body>{children}</body>
  </html>
);

export default SearchLayout;
