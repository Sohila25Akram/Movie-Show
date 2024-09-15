import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Help() {
  return (
    <Box className='container-x' padding='75px' textAlign='center' borderTop='1px solid #d8d8d8'>
        <Typography variant='h3' fontSize='24px' color='#4a4a4a' letterSpacing='1px' lineHeight='1.4em' marginBottom='10px'>Need help? Contact our support team on</Typography>
        <Typography fontSize='46px' color='#ec7532'>0330 123 4567</Typography>
    </Box>
  )
}
