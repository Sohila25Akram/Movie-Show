import { Box, Typography } from '@mui/material'
import React from 'react'
import { ButtonTransition } from '../Button/Button'
import HoverMoviePhoto from '../HoverMoviePhoto/HoverMoviePhoto'
import Tap from '../Tap/Tap'

export default function Post() {
  return (
    <Box marginBottom='50px' paddingBottom='50px' borderBottom={'1px solid #d8d8d8'}>
        <Box maxHeight={'304px'} overflow='hidden' borderRadius='10px'>
          <HoverMoviePhoto ourWidth={'100%'} />
        </Box>
        <Box>
          <Tap tapItems={'Marine corp 2 picks up BAFTA'} ourColor='#717171' isUpper={false} ourBorderColor='#d8d8d8'/>
          <Typography color='#717171' margin={'20px 0'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, […]</Typography>
          <ButtonTransition />
        </Box>
    </Box>
  )
}
