import React from 'react'
import './Button.css'
import Link from 'next/link'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export function ButtonTransition() {
  return (
    <Link className='post-link' href='/news' style={{outline: 'none', textTransform: 'uppercase', backgroundColor: '#fff', border: '2px solid #ec7532', borderRadius: '30px', padding: '12px 24px', fontSize: '13px', letterSpacing: '4px',cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'inline-block', transition: 'all 300ms ease-in-out'}}>
        <span>read full post</span>
    </Link>
  )
}

export function PlayButton(){
  return(
    <a href='https://youtu.be/d96cjJhvlMA' className='play' style={{borderRadius: "50%", border:"2px solid #fff", display: "inline-block", color: "#fff",cursor: "pointer", margin: "0 auto 20px", lineHeight: "86px", width: "80px", height: "80px", transition: "all 300ms ease-in-out"}}><PlayArrowIcon style={{fontSize: "24px", paddingLeft: "5px"}} /></a>
  )
}
