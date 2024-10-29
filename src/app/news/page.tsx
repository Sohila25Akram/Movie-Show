import { Box } from '@mui/material'
import Post from '@/components/Post/Post'
import type { Post as PostType} from '@/types/postTypes';

export default async function News() {
  const posts: PostType[] = await fetch('http://localhost:3000/api/posts')
  .then(res => res.json())
  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </Box>
  )
}
