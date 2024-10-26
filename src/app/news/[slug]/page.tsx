import { Box } from '@mui/material'
import React from 'react'
import PostDetails from '@/components/PostDetails/PostDetails'

interface IProps {
	params: {
		slug: string;
    categories: string | string[];
	}
}

export default function page({params}: IProps) {
  console.log('params.slug:', params.slug);

  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      <PostDetails params={params} />
    </Box>
  )
}
