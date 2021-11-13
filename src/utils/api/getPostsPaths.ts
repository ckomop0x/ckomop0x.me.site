import { PostsPathQuery_posts } from 'queries/types/PostsPathQuery';

interface getPostsPathsProps {
  posts: PostsPathQuery_posts[];
  category: 'blog' | 'poetry';
}

export default function getPostsPaths({
  posts,
  category,
}: getPostsPathsProps): string[] | string {
  if (!category) return 'No category provided';
  if (!posts) return 'No posts provided';

  return posts.map(post => `/${category}/${post.slug}`);
}
