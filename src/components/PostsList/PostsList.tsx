'use client';

import { useEffect, useState } from 'react'
import Post from '@/components/Post/Post'

export default function PostsList() {
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
    <>
        {posts.map((post) => (
            <Post key={post.slug} post={post} />
      ))}
    </>
  )
}
