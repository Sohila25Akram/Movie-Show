'use client';

import Banner from '@/components/Banner/Banner'
import { PlayTrailerButton } from '@/components/Button/Button'
import Comment from '@/components/Comment/Comment'
import Form from '@/components/Form/Form'
import Tap from '@/components/Tap/Tap'
import { Box, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '@/types/movieTypes';

interface IProps {
	params: {
		id: string;
        genre: string | string[];
        label: string,
        coverImgPath: string
	}
}

export default function page({params} : IProps) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const { genre, label, coverImgPath } = params;

    const fetchMovieDetails = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/movies/${params.id}`);
            const data = await response.json();
            setMovie(data)
        }catch{

        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [params.id])

    if (!movie) {
        return (
          <Box sx={{ width: '100%', textAlign: 'center', padding: '50px' }}>
            <Typography variant="h4">Movie not found</Typography>
          </Box>
        );
    }

  return (
    <>  
    <Banner subTitle={genre} title={label} imgBackground={coverImgPath}>
        <Typography marginBottom='20px'>
            {movie?.descriptionOne}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <Typography textAlign='center' sx={{border: "2px solid #fff", borderRadius: "50%", width: '48px', height: '48px', lineHeight: '48px', fontSize: '13px', fontWeight: 'bold'}}>{movie?.certificateAge}</Typography>
            <PlayTrailerButton />
            <Rating name="half-rating-read" value={movie?.rating} defaultValue={2.5} precision={0.1} size='small' readOnly />
        </Box>
    </Banner>
    <div className='container-x container-y'>
        <Box sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}}}>
            <Box minWidth={'65%'} width={'100%'}>
                <Tap tapItems='synopsis' ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Box sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}, alignItems: 'flex-start'}}>
                    <Box borderRadius='10px' overflow='hidden' minWidth='178px'>
                        <Image src={`${movie?.coverImgPath}`} alt='' width={100} height={100} layout='responsive' style={{display: 'block'}}/>
                    </Box>
                    <Box>
                        <Typography variant='h3' fontSize='24px' color='#101010' letterSpacing='1px' marginBottom='10px'>{movie?.label}</Typography>
                        <Typography color='#717171' marginBottom='20px'>
                            {movie?.descriptionOne}
                        </Typography>
                        <Typography color='#717171' marginBottom='20px'>
                            {movie?.descriptionTwo}
                        </Typography>
                        <ul style={{margin:'25px 0', color:'#717171', display: 'flex', flexDirection: 'column', listStyle: 'none'}}>
                            {(movie?.director) &&
                                <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                    <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>director</span><span>{movie.director}</span>
                                </li>
                            }
                            {(movie?.starring) &&
                                <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                    <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>starring</span><span>{movie.starring}</span>
                                </li>
                            }
                            {(movie?.releasedDate) &&
                                <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                    <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>released</span><span>{movie.releasedDate}</span>
                                </li>
                            }
                            {(movie?.runningTime) &&
                                <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                    <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>running time</span><span>{movie.runningTime}</span>
                                </li>
                            }
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box minWidth='250px' flexGrow={1}>
                <Tap tapItems='viewing times' ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <ul style={{paddingLeft: '40px', listStyle: 'none', color: '#4a4a4a', display: 'flex', flexDirection: 'column'}}>
                    {movie?.watchingTimes.map((watchingTime, index) => (
                        <li key={index} style={{marginBottom: '10px', display: 'flex', gap: '15px'}}>
                            <span style={{letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '12px'}}>{watchingTime.day}</span>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                {watchingTime.times.map((time, timeIndex) => (
                                    <Typography key={timeIndex} sx={{minWidth: 'fit-content' , padding: '7px 10px', margin: '0 5px 5px 0', color: '#717171', backgroundColor: '#d8d8d8', borderRadius: '5px', fontSize: '14px', width: 'fit-content', display: 'inline-block', letterSpacing: '0'}}>{time}</Typography>
                                ))}
                            </div>
                        </li>
                    ))}
                    
                    
                    {/* <li style={{marginBottom: '10px', display: 'inline-block'}}><span style={{letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '12px'}}>saterday</span></li> */}
                </ul>
            </Box>
        </Box>
        <Box  sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}}}>
            <Box minWidth={'65%'} width={'100%'}>
                <Tap tapItems='comments'  ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Comment ourBackground='#fff' ourTransform='0' ourPadding='0 0' />
                <Comment ourBackground='#fff' ourTransform='0' ourPadding='0 0' />
            </Box>
            <Box minWidth='250px' flexGrow={1}>
                <Tap tapItems='leave a comment'  ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Form />
            </Box>
        </Box>
    </div>
    </>

  )
}
