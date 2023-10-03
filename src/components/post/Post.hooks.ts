export type Post = {
  id: string;
  name: string;
  sha: string;
  size: number;
  download_url: string | null;
  type: 'file' | 'dir';
  thumbnail: string;
};

export const postsUrl = 'https://api.github.com/repos/imnotmoon/blog-posts/contents';
export const baseThumbnailUrl =
  'https://raw.githubusercontent.com/imnotmoon/blog-posts/main/_thumbnail';

export const getPosts = async () => {
  const res = await fetch(postsUrl);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: Post[] = await res.json();
  return (
    data
      .map((each) => ({ ...each, id: each.sha, thumbnail: `${baseThumbnailUrl}/${each.name}.png` }))
      // NOTE: thumbnails are in _thumbnail directory with same name
      .filter((each) => each.type === 'dir' && !each.name.match(/^_/)) as Post[]
  );
};
