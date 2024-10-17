import { Box } from '@mui/material'
// import SideNav from '../../components/SideNav/SideNav'
import Post from '@/components/Post/Post'
import { posts } from '@/assets/postsData'

export default function News() {
  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </Box>
  )
}
