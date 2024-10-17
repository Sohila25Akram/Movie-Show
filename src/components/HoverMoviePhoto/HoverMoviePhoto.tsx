import { Box, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import './HoverMoviePhoto.css'
import { PlayButton } from '../Button/Button';

export default function HoverMoviePhoto({ourWidth='fit-content', imgPath='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'}: {ourWidth?: string, imgPath?: string}) {
  return (
    <Box className='card-with-hover' width={ourWidth} textAlign='center' sx={{margin: '0 auto', position: "relative", overflow: "hidden", borderRadius: "10px", mb: "20px", display:"flex", justifyContent:"center", '&:hover .figure-caption': {opacity: '1'}}}>
        <CardMedia
          // className="card-with-hover"
          component="img"
          image={imgPath}
          alt="green iguana"
          sx={{minHeight: "257px"}}
        />
        <Box className='card-with-hover-bg' sx={{position: "absolute", bottom: "0", left: "0", color: "#fff", transition: ".5s", 
          // transform: "rotateZ(45deg) scale(0, 0)", 
          transformOrigin: "center left",
          transform: "rotateZ(45deg)",
          width: "0",
          height: "0"
          }}>
        </Box>
        <Box className="figure-caption" sx={{position: "absolute", top: "24px", margin: "24px", zIndex: "2", color: "#fff", opacity: '0', transition: '.3s', transitionDelay: '.1s'}}>
          {/* <a href='https://youtu.be/d96cjJhvlMA' className='play' style={{borderRadius: "50%", border:"2px solid #fff", display: "inline-block", color: "#fff",cursor: "pointer", margin: "0 auto 20px", lineHeight: "86px", width: "80px", height: "80px", transition: "all 300ms ease-in-out"}}><PlayArrowIcon style={{fontSize: "24px", paddingLeft: "5px"}} /></a> */}
          <PlayButton />
          <Link href='/'  style={{textTransform: "uppercase", textDecoration: "none", color: "#fff", fontSize: "12px", fontWeight: "bold", cursor: "pointer", display: "block", marginBottom: "10px", letterSpacing:"3px", transition: "all 300ms ease-in-out"}}>read more</Link>
          <Typography>Released: 14 April, 2017</Typography>
        </Box>
      </Box>
  )
}
