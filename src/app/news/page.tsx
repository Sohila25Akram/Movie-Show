'use client';

import { Box } from '@mui/material'
import Post from '@/components/Post/Post'
import { useEffect, useState } from 'react';

export default function News() {

  const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/posts');
            const data = await response.json();
            setPosts(data)
        }catch{

        }
    }

    useEffect(() => {
        fetchPosts();
      }, []);

  return (
    <Box sx={{width: '100%', [`@media (min-width: 768px)`]: {width: '56.8%'}}}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </Box>
  )
}
