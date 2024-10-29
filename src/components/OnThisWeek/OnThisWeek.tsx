"use client";

import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './OnThisWeek.css'
import Tap from '../Tap/Tap';
import MovieOfDay from '../MovieOfDay/MovieOfDay';
import { Movie } from '@/types/movieTypes';

const tapItems = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
});


export default function OnThisWeek() {
    const [selectedDay, setSelectedDay] = useState('mon');
    const [movies, setMovies] = useState([])

    const handleSelectedDay = (day: string) => {
        setSelectedDay(day);
    }

    const fetchMovies = async () => {
      try{
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data);
      }catch{

      }
    }

    useEffect(() => {
      fetchMovies();
    }, [])

    const filteredMovies = movies.filter((movie: Movie) =>
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
        {filteredMovies.map((movie: Movie) => (
            <MovieOfDay key={movie.id} movie={movie} />
        ))}
    </>
  )
}
