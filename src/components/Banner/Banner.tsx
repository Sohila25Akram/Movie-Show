import { Box, Typography } from '@mui/material'

type BannerProps = {
    subTitle: string;
    title: string;
    imgBackground: string;
};

export default function Banner({subTitle, title, imgBackground}: BannerProps) {
  return (
    <Box position='relative' width='100%' padding='200px 0 100px' sx={{backgroundImage: `url(${imgBackground})`, backgroundSize: 'cover', backgroundColor: '#101010', backgroundPosition: 'center'}}>
        <Box className='container-x'>
            <Typography fontSize='14px' color='#fbbd61' letterSpacing='2px' textTransform='uppercase'>{subTitle}</Typography>
            <Typography variant='h1' color='#fff' fontSize='52px' letterSpacing='3px' marginBottom='10px'>{title}</Typography>
        </Box>
    </Box>
  )
}
