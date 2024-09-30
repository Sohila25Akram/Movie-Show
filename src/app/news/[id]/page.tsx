import Comment from '@/components/Comment/Comment'
import Form from '@/components/Form/Form'
import Post from '@/components/Post/Post'
import Tap from '@/components/Tap/Tap'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
        <Post />
        <Tap tapItems='comments' ourColor='#ec7532' ourBorderColor='#d8d8d8' ourMargin='45px 0'/>
        <Box>
            <Comment />
            <Comment />
        </Box>
        <Tap tapItems='leave a comment' ourColor='#ec7532' ourBorderColor='#d8d8d8' ourMargin='45px 0'/>
        <Form isFlex={true} />
    </Box>
  )
}
