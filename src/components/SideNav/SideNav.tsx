import { Box, TextField, Typography } from '@mui/material'
import Tap from '../Tap/Tap'

const tagsList = ['tag 1', 'tag 1', 'tag 1', 'tag 1', 'tag 1', 'tag 1']

export default function SideNav() {
  return (
    <Box sx={{padding: '0px 15px', width: {xs: '100%'}, [`@media (min-width: 768px)`]:{width: '30%', maxWidth: '292px'}}}>
        <Box position='relative' marginBottom='40px' sx={{backgroundColor: '#fff'}}>
            {/* <Input color='primary' placeholder="Type in here…" sx={{width: '100%', padding: '12px 15px'}} /> */}
            <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" sx={{width: '100%'}} />
        </Box>
        <Box marginBottom='40px'>
            <Tap tapItems='category' ourColor='#ec7532' ourMargin='0 0 25px' ourPadding='0 0 10px 0' ourBorderColor='#d8d8d8' />
            <ul style={{listStyle: 'none'}}>
                <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#717171'}}>Awards</a></li>
                <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#717171'}}>Coming soon</a></li>
                <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#717171'}}>New releases</a></li>
                <li style={{marginBottom: '8px'}}><a href="#" style={{color: '#717171'}}>Whats hot</a></li>
            </ul>
        </Box>
        <Box marginBottom='40px'>
            <Tap tapItems='archives' ourColor='#ec7532' ourMargin='0 0 25px' />
            <Typography color='#717171' fontWeight='bold'>November 2017</Typography>
        </Box>
        <Box marginBottom='40px'>
            <Tap tapItems='tags' ourColor='#ec7532' ourMargin='0 0 25px' />
            <Box display='flex' flexWrap='wrap' gap='5px'>
                {tagsList.map((tag, index) => (
                    <Typography key={index} color='#717171' borderRadius='5px' letterSpacing='2px' fontSize='14px' width='fit-content' padding='5px 8px' border='2px solid #d8d8d8' sx={{backgroundColor: '#d8d8d8', cursor: 'pointer', transition: 'all 300ms ease-in-out', '&:hover': {backgroundColor: '#fff', color: '#fbbd61', borderColor: '#ec7532'}}}>{tag}</Typography>
                ))}
            </Box>
        </Box>
    </Box>
  )
}
