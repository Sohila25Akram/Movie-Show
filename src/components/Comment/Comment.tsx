import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

type IProps = {
  ourBackground?: string,
  ourTransform?: string,
  ourPadding?: string
};

export default function Comment({ourBackground= '#f3f3f3', ourTransform = '50%', ourPadding= '30px 0'}: IProps) {
  return (
    <Box margin='0 0 35px -15px' padding={ourPadding} display={'flex'} gap='30px' sx={{backgroundColor: ourBackground, boxShadow: 'inset 50px 0 0 #fff'}}>
        <Box width='70px' minWidth={'70px'} height='70px' borderRadius='50%' overflow='hidden' sx={{outline: '5px solid #fff', transform: `translateY(${ourTransform})`}}>
            <Image src="https://secure.gravatar.com/avatar/69d73d86883fb4d433a1df2e89776b84?s=70&d=mm&r=g" width={70} height={70} alt="user" />
        </Box>
        <Box  paddingLeft='15px'>
            <Typography fontSize='12px' color='#ec7532' letterSpacing='1.5px' textTransform='uppercase'>november 2390</Typography>
            <Typography color='#101010' textTransform='capitalize' letterSpacing='0' paddingBottom='10px' marginBottom='5px'>lee grand</Typography>
            <Typography color='#717171' textTransform='capitalize' letterSpacing='0' marginBottom='20px'>
                Anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima eodem modo typi, qui nunc nobis videntur parum clari.
            </Typography>
        </Box>
    </Box>
  )
}
