'use client';

import HelloWorld from '@/mdx/hello.mdx';
import { Container } from '@/components/container/Container';
import { PostHeader } from '@/components/header/post/PostHeader';

const Post = () => (
  <main>
    <Container>
      <PostHeader title={'title'} />
      <HelloWorld />
    </Container>
  </main>
);

export default Post;
