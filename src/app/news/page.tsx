import { Box, Tab, Typography } from '@mui/material'
import Banner from '../../components/Banner/Banner'
// import SideNav from '../../components/SideNav/SideNav'
import MovieCard from '../../components/MovieCard/MovieCard'
import SideNav from '@/components/SideNav/SideNav'
import HoverMoviePhoto from '@/components/HoverMoviePhoto/HoverMoviePhoto'
import Tap from '@/components/Tap/Tap'
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
