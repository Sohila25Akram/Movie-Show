"use client";

import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { movies } from '../../assets/moviesData'
import './OnThisWeek.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tap from '../Tap/Tap';
import MovieOfDay from '../MovieOfDay/MovieOfDay';
import type { Movie } from '@/types/movieTypes';

const tapItems = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
});


export default function OnThisWeek() {
    const [selectedDay, setSelectedDay] = useState('mon');

    const handleSelectedDay = (day: string) => {
        setSelectedDay(day);
    }

    const filteredMovies = movies.filter((movie) =>
        movie.watchingTimes.some((watchTime) => {
          const dayAbbreviation = watchTime.day.substring(0, 3).toLowerCase(); // Abbreviate day to match tapItems (e.g., "Mon" -> "mon")
          return dayAbbreviation === selectedDay;
        })
      );
  return (
    <>
        <Box color={'#4a4a4a'} position='relative' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Tap tapItems={tapItems} ourColor='#000' handleClick={handleSelectedDay} selectedDay={selectedDay} />
            <Typography fontSize={'14px'} color={'#717171'} sx={{textTransform: 'uppercase', position: 'absolute', bottom: '-30px', right: '0' , [`@media (min-width: 768px)`]: {position: 'static'}}}>{currentDate}</Typography>
        </Box>
        {filteredMovies.map((movie) => (
            <MovieOfDay movie={movie} />
        ))}
    </>
  )
}
