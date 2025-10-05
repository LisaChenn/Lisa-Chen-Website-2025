import type { PageLoad } from './$types';
import { posts as registry } from '$lib/posts';

export const load: PageLoad = async () => {
  const posts = [...registry].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags ?? []))).sort();
  return { posts, tags };
};
