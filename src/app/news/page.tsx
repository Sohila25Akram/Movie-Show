import { Box, Tab, Typography } from '@mui/material'
import Banner from '../../components/Banner/Banner'
// import SideNav from '../../components/SideNav/SideNav'
import MovieCard from '../../components/MovieCard/MovieCard'
import SideNav from '@/components/SideNav/SideNav'
import HoverMoviePhoto from '@/components/HoverMoviePhoto/HoverMoviePhoto'
import Tap from '@/components/Tap/Tap'
import Post from '@/components/Post/Post'

export default function News() {
  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      <Post />
      <Post />
      <Post />
    </Box>
  )
}
