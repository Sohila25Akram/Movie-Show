import Banner from '@/components/Banner/Banner'
import { PlayTrailerButton } from '@/components/Button/Button'
import Comment from '@/components/Comment/Comment'
import Form from '@/components/Form/Form'
import Tap from '@/components/Tap/Tap'
import { Box, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '@/types/movieTypes';
import MovieDetails from '@/components/MovieDetails/MovieDetails'

interface IProps {
	params: {
		id: string;
        genre: string | string[];
        label: string,
        coverImgPath: string
	}
}

export default function page({params} : IProps) {
  return (
    <>  
        <MovieDetails params={params} />
    </>

  )
}
