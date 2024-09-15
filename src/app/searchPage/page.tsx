"use client"

import { Box, Input, OutlinedInput, Typography } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import Tap from '../../components/Tap/Tap'
import OnThisWeek from '../../components/OnThisWeek/OnThisWeek';
import Help from '../../components/Help/Help';

const tapItems = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
});

export default function SearchPage() {
  return (
    <Box>
        <Banner title="What's on this week" subTitle='take a look at' imgBackground='//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/hero-whatson-1.png' />
        <Box padding='75px 0' className='container-x'>
            <Box position='relative' zIndex='99' marginTop='-140px' marginBottom='50px' padding='20px' borderRadius='40px 40px 0 0' sx={{backgroundColor: '#fff'}}>
                {/* <Input color='primary' placeholder="Type in here…" sx={{width: '100%', borderRadius: '40px', overflow: 'hidden', padding: '6px 20px'}} /> */}
                <OutlinedInput placeholder="Type in here…" 
                sx={{
                  width: '100%',
                  borderRadius: '40px',
                  overflow: 'hidden',
                }}
                />
            </Box>
            <Box className='container-x'>
              <OnThisWeek />
            </Box>
        </Box>
        <Help />
    </Box>
  )
}
