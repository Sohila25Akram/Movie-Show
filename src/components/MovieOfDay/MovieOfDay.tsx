import { Box, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Movie } from '@/types/movieTypes';
import Link from 'next/link';
import Image from 'next/image';

export default function MovieOfDay({movie}: {movie: Movie}) {
  return (
    <Box color={'#717171'} sx={{display: 'flex', flexDirection: 'column', [`@media (min-width: 768px)`]: {flexDirection: 'row', alignItems: 'center'}, gap: '30px', borderTop: '1px solid #d8d8d8', marginBottom: '40px', paddingTop: '40px'}} key={movie.id}>
        <Box sx={{borderRadius: '10px', overflow: 'hidden', [`@media (min-width: 768px)`]: {minWidth: '215px'}}}>
            <Image src={movie.coverImgPath} alt='movie' width={265} height={100} layout="responsive" style={{ display: 'block'}} />
            {/* https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb2-270x340.jpg */}
        </Box>
        <Box textAlign={'left'}>
            {movie.genre.map(((type, index) => (
                <Typography key={index} className='genre' color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase"}}>{type}</Typography>
            )))}
            <Typography variant={'h5'} sx={{textTransform: 'capitalize', letterSpacing: '1px', color: '#101010', marginBottom: '10px'}}>{movie.label}</Typography>      
            <Typography>{movie.descriptionOne}</Typography>
            <Link href={`/searchPage/${movie.id}`} className='show-details' style={{color: '#ec7532', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '4px', transition: 'all 300ms ease-in-out', display: 'flex', alignItems: 'center', margin: '20px 0 8px'}}>full synopsis <ChevronRightIcon style={{fontSize: '16px'}}/></Link>
            <Typography variant={'h6'} fontSize={'12px'} sx={{textTransform: 'uppercase', letterSpacing: '1.5px', display: 'flex', alignItems: 'center'}}><AccessTimeIcon style={{fontSize: '13px', paddingRight: '6'}} /> viewing times</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', marginTop: '30px'}}>
                    {movie.watchingTimes.find(watchingTime => watchingTime.day === 'Tuesday')?.times.map(time => (
                        <Typography key={time} sx={{padding: '7px 10px', margin: '0 5px 5px 0', color: '#717171', backgroundColor: '#d8d8d8', borderRadius: '5px', fontSize: '14px', width: 'fit-content', display: 'inline-block', letterSpacing: '0'}}>{time}</Typography>
                    ))}
                </Box>
                <Typography sx={{textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '12px'}}>{movie.runningTime}</Typography>
            </Box>
        </Box>
    </Box>
  )
}
