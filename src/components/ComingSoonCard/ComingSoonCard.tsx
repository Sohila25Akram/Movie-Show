import { Box, Typography } from '@mui/material'

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
            <img src={movie.coverImgPath} alt='movie' style={{display: 'block', width: '100%'}} />
        </Box>
        <Typography color={'#fff'}>{movie.label}</Typography>
        <Typography color={'#717171'}>{movie.releasedDate}</Typography>
    </Box>
  )
}
