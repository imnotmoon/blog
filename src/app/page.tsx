import { PostList } from '@/components/post/list/PostList';
import { MainPost } from '@/components/post/main/MainPost';
import { post } from '@/components/post/Post.mock';

const Home = () => (
  <main>
    <section>
      <MainPost {...post} />
    </section>
    <section>
      <PostList />
    </section>
  </main>
);

export default Home;
