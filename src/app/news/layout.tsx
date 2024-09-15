import Banner from '@/components/Banner/Banner'
import SideNav from '@/components/SideNav/SideNav'
import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

export default function NewsLayout({children}: {children: ReactNode}) {
  return (
    <div>
        <Banner title='Movie news' subTitle='very latest' imgBackground='//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/her-whatson.png' />
        <Box className='container-x container-y' display='flex' gap={'60px'} sx={{flexDirection: 'column', [`@media (min-width: 768px)`]: {flexDirection: 'row', gap:'110px'}}}>
            {children}
            <SideNav />
        </Box>
    </div>
  )
}
