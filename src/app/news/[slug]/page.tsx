'use client'

import Comment from '@/components/Comment/Comment'
import Form from '@/components/Form/Form'
import Tap from '@/components/Tap/Tap'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HoverMoviePhoto from '@/components/HoverMoviePhoto/HoverMoviePhoto'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from 'next/link'
import { Post } from '@/types/postTypes'

interface IProps {
	params: {
		slug: string;
    categories: string | string[];
	}
}

export default function page({params}: IProps) {
  const [post , setPost] = useState<Post | null>(null)
  console.log('params.slug:', params.slug);

  const fetchPostDetails = async () => {
    try{
      const response = await fetch(`http://localhost:3000/api/posts/${params.slug}`)
      const data = await response.json();
      setPost(data);
    }catch{

    }
  }

  useEffect(() => {
    fetchPostDetails();
  }, [params.slug])

  if (!post) {
    return (
      <Box sx={{ width: '100%', textAlign: 'center', padding: '50px' }}>
        <Typography variant="h4">Post not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      <Box borderBottom={'1px solid #d8d8d8'}>
        <Box maxHeight={'304px'} overflow='hidden' borderRadius='10px'>
          <HoverMoviePhoto ourWidth={'100%'} imgPath={post?.postImgPath} />
        </Box>
        <Box>
          <Typography color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase", margin: '30px 0 8px', fontSize: '14px', color: '#ec7532'}}>
            {post.categories.join(', ')}
          </Typography>
          <Tap tapItems={post.title} ourColor='#717171' isUpper={false} ourBorderColor='#d8d8d8' ourPadding='0 0 20px'/>
          <Typography color='#717171' margin={'20px 0'}>{post.descriptionOne}</Typography>
          <Typography color='#717171' margin={'20px 0'}>{post.descriptionTwo}</Typography>
        </Box>
        <Box borderTop='1px solid #d8d8d8' padding='10px 0' marginTop='35px' color='#717171'>
          <LocalOfferIcon style={{marginRight: '10px', fontSize: '14px', color: '#ec7532'}} />Tags: 
          {post.tags.map((tag, index) => (
            <span key={index}>
              <Link href={`/news/${params.slug}`} style={{marginLeft: '5px', fontSize: '12px'}}>{tag}</Link>
              {index < post.tags.length - 1 && ','}
            </span>
          ))}
        </Box>
      </Box>
        {/* <Post post={post} /> */}
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
