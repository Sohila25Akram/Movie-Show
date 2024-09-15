import { Box, Typography } from '@mui/material'

interface Iprops {
    step: {
        imgPath: string,
        label: string,
        productionDate: string,
    }
    handleClick : () => void
    currentMovie: { label: string }
}

export default function ComingSoonCard({step, handleClick, currentMovie}: Iprops) {
  return (
    <Box onClick={handleClick} textAlign='center' sx={{width: '165px', transition: 'all 300ms ease-in-out', opacity: `${!(currentMovie.label === step.label)? '0.2': '1'}`, '&:hover':{opacity: '1 !important'}}} >
        <Box sx={{borderRadius: '10px', width: '100%'}}> 
            <img src={step.imgPath} alt='movie' style={{display: 'block', width: '100%'}} />
        </Box>
        <Typography color={'#fff'}>{step.label}</Typography>
        <Typography color={'#717171'}>{step.productionDate}</Typography>
    </Box>
  )
}
