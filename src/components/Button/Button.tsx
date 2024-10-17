import React from 'react'
import './Button.css'
import Link from 'next/link'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from '@mui/material';

export function PlayTrailerButton() {
  return(
    <Box className='play-trailer' sx={{padding: "8px 24px", borderRadius: "30px", textTransform: "uppercase", letterSpacing: "3px", height: 'fit-content', width: 'fit-content', background: "linear-gradient(to right, #ec7532 0%, #fbbd61 100%)", cursor: 'pointer'}}>
      Play Trailer
    </Box>
  )
}

export function ButtonTransition({postSlug}: {postSlug: string}) {
  return (
    <Link className='post-link' href={`/news/${postSlug}`} style={{outline: 'none', textTransform: 'uppercase', backgroundColor: '#fff', border: '2px solid #ec7532', borderRadius: '30px', padding: '12px 24px', fontSize: '13px', letterSpacing: '4px',cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'inline-block', transition: 'all 300ms ease-in-out'}}>
        <span>read full post</span>
    </Link>
  )
}

export function PlayButton(){
  return(
    <a href='https://youtu.be/d96cjJhvlMA' className='play' style={{borderRadius: "50%", border:"2px solid #fff", display: "inline-block", color: "#fff",cursor: "pointer", margin: "0 auto 20px", lineHeight: "86px", width: "80px", height: "80px", transition: "all 300ms ease-in-out"}}><PlayArrowIcon style={{fontSize: "24px", paddingLeft: "5px"}} /></a>
  )
}

export function PostCommentButton(){
  return(
    <button 
      type="submit"
      className='post-comment-btn' 
      style={{
        padding: '12px 24px', 
        border: '2px solid #ec7532', 
        color: '#ec7532', 
        backgroundColor: '#fff', 
        outline: 'none', 
        letterSpacing: '4px', 
        textTransform: 'uppercase',
        fontSize: '13px', 
        borderRadius: '30px',
        transition: 'all 300ms ease-in-out',
        cursor: 'pointer',
        lineHeight: '1.42857143'
      }}>
        post comment
      </button>
  )
}
