import { Box, Typography } from '@mui/material'
import Image from 'next/image'

interface Iprops {
    movie: {
        coverImgPath: string,
        label: string,
        releasedDate: string,
    }
    handleClick : () => void
    currentMovie: { label: string }
}

export default function ComingSoonCard({movie, handleClick, currentMovie}: Iprops) {
  return (
    <Box onClick={handleClick} textAlign='center' sx={{width: '165px', transition: 'all 300ms ease-in-out', opacity: `${!(currentMovie.label === movie.label)? '0.2': '1'}`, '&:hover':{opacity: '1 !important'}}} >
        <Box sx={{borderRadius: '10px', width: '100%'}}> 
            <Image src={movie.coverImgPath} alt='movie' width={100} height={100} style={{display: 'block'}} />
        </Box>
        <Typography color={'#fff'}>{movie.label}</Typography>
        <Typography color={'#717171'}>{movie.releasedDate}</Typography>
    </Box>
  )
}
