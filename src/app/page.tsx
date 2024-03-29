import { PostList } from '@/components/post/list/PostList';
import { MainPost } from '@/components/post/main/MainPost';
import { post } from '@/components/post/Post.mock';
import { Section } from '@/components/section/Section';
import { Container } from '@/components/container/Container';
import Link from 'next/link';

const Home = () => (
  <main>
    <Section>
      <Container>
        <Link href={`/blog/post/${post.id}`}>
          <MainPost {...post} />
        </Link>
      </Container>
    </Section>
    <Section>
      <Container>
        <PostList />
      </Container>
    </Section>
  </main>
);

export default Home;
