import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { steps } from '../../assets/data'
import './OnThisWeek.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tap from '../Tap/Tap';

const tapItems = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
});


export default function OnThisWeek() {
  return (
    <>
        <Box color={'#4a4a4a'} position='relative' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Tap tapItems={tapItems} ourColor='#000'/>
            <Typography fontSize={'14px'} color={'#717171'} sx={{textTransform: 'uppercase', position: 'absolute', bottom: '-30px', right: '0' , [`@media (min-width: 768px)`]: {position: 'static'}}}>{currentDate}</Typography>
        </Box>
        {steps.map((step, index) => (
            <Box color={'#717171'} sx={{display: 'flex', flexDirection: 'column', [`@media (min-width: 768px)`]: {flexDirection: 'row', alignItems: 'center'}, gap: '30px', borderTop: '1px solid #d8d8d8', marginBottom: '40px', paddingTop: '40px'}} key={index}>
                <Box sx={{borderRadius: '10px', overflow: 'hidden', [`@media (min-width: 768px)`]: {minWidth: '165px'}}}>
                    <img src={step.imgPath} alt='movie' style={{maxWidth: '100%', display: 'block'}} />
                    {/* https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb2-270x340.jpg */}
                </Box>
                <Box textAlign={'left'}>
                    {step.genre.map(((type, index) => (
                        <Typography key={index} className='genre' color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase"}}>{type}</Typography>
                    )))}
                    <Typography variant={'h5'} sx={{textTransform: 'capitalize', letterSpacing: '1px', color: '#101010', marginBottom: '10px'}}>{step.label}</Typography>      
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eligendi dolorem, autem beatae animi magni molestiae perferendis voluptate quaerat cupiditate magnam, deleniti omnis quidem qui culpa cumque quibusdam earum dignissimos.
                    </Typography>
                    <a href='/' className='show-details' style={{color: '#ec7532', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '4px', transition: 'all 300ms ease-in-out', display: 'flex', alignItems: 'center', margin: '20px 0 8px'}}>full synopsis <ChevronRightIcon style={{fontSize: '16px'}}/></a>
                    <Typography variant={'h6'} fontSize={'12px'} sx={{textTransform: 'uppercase', letterSpacing: '1.5px', display: 'flex', alignItems: 'center'}}><AccessTimeIcon style={{fontSize: '13px', paddingRight: '6'}} /> viewing times</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', marginTop: '30px'}}>
                            {step.watchingTimes.map(time => (
                                <Typography sx={{padding: '7px 10px', margin: '0 5px 5px 0', color: '#717171', backgroundColor: '#d8d8d8', borderRadius: '5px', fontSize: '14px', width: 'fit-content', display: 'inline-block'}}>{time}</Typography>
                            ))}
                        </Box>
                        <Typography sx={{textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '12px'}}>{step.takingTime}</Typography>
                    </Box>
                </Box>
            </Box>
        ))}
    </>
  )
}
