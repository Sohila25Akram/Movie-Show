import { Box } from '@mui/material'
import Post from '@/components/Post/Post'
import PostsList from '@/components/PostsList/PostsList';

export default function News() {
  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      <PostsList />
    </Box>
  )
}
