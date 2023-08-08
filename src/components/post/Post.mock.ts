import thumbnail from './thumbnail.png';

export const post = {
  id: 1,
  title: 'test',
  description: 'test test test test test test',
  thumbnailUrl: thumbnail,
  uploadAt: new Date(),
};

export const postList = new Array(10).fill(post).map((post, idx) => ({
  ...post,
  id: idx,
}));
