import { Box, Typography } from '@mui/material'
import React from 'react'
import { ButtonTransition } from '../Button/Button'
import HoverMoviePhoto from '../HoverMoviePhoto/HoverMoviePhoto'
import Tap from '../Tap/Tap'
import type { Post } from '@/types/postTypes'

export default function Post({post}: {post: Post}) {
  return (
    <Box marginBottom='50px' paddingBottom='50px' borderBottom={'1px solid #d8d8d8'}>
        <Box maxHeight={'304px'} overflow='hidden' borderRadius='10px'>
          <HoverMoviePhoto ourWidth={'100%'} imgPath={post.postImgPath} />
        </Box>
        <Box>
            <Typography color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase", margin: '30px 0 8px', fontSize: '14px', color: '#ec7532'}}>
                {post.categories.join(', ')}
            </Typography>
          <Tap tapItems={post.title} ourColor='#717171' isUpper={false} ourBorderColor='#d8d8d8' ourPadding='0 0 20px'/>
          <Typography color='#717171' margin={'20px 0'}>{post.descriptionOne}</Typography>
          <ButtonTransition postSlug={post.slug} />
        </Box>
    </Box>
  )
}
