'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './Slider.css';
import MovieCard from '../MovieCard/MovieCard';
import { movies } from '@/assets/moviesData';
import ComingSoonCard from '../ComingSoonCard/ComingSoonCard';
import { Rating } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tap from '../Tap/Tap';
import { PlayTrailerButton } from '../Button/Button';


export function SliderBanner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const moviesNum = movies.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box minHeight={'653px'} paddingTop={'114px'} sx={{ flexGrow: 1, position: "relative", padding: {xs: "77px 0 0", sm: "114px 0 0"}, overflow: "hidden", '&::after':{background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)', content: `''`, width: '100%', height: '100%', position: 'absolute', zIndex: '1', top: '0', left: ''}}}>
        <Box sx={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", zIndex: "-1", backgroundImage: `url(${movies[activeStep].coverImgPath})`, backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        </Box>
      <Box className='container-x' sx={{marginTop: '50px !important', minHeight: "248px", position: 'relative', zIndex: '2'}}>
        <Box sx={{textAlign: "left", pl: 2, color: "#fbbd61"}}>
        {movies[activeStep].genre.map(((type, index) => (
            <Typography key={index} className='genre' sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase"}}>{type}</Typography>
        )))}
        </Box>
        <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: 2,
              bgcolor: 'transparent',
              color: '#fff'
            }}
        >
            <Typography variant='h3' align='left' marginBottom={'10px'} lineHeight={'1.4em'}>{movies[activeStep].label}</Typography>
        </Paper>
        <Box maxWidth={'730px'} fontSize={'18px'} lineHeight={'1.42857143'} marginBottom={'20px'}  paddingTop={'0 !important'} paddingBottom={'0 !important'} sx={{ width: '100%', p: 2, textAlign: "left" }}>
            {movies[activeStep].descriptionOne}
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, pl: 2}}>
            <Typography textAlign='center' sx={{border: "2px solid #fff", borderRadius: "50%", width: '48px', height: '48px', lineHeight: '48px', fontSize: '13px', fontWeight: 'bold'}}>{movies[activeStep].rate}</Typography>
            <PlayTrailerButton />
        </Box>

        <Box sx={{display: 'flex', gap: '8px', bottom: '-80px', padding: '16px', marginTop: '70px'}}>
        {movies.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              width: '10px',
              height: '10px',
              border: '2px solid #fff',
              borderRadius: '50%',
              backgroundColor: index === activeStep ? '#fff' : 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
       </Box>
     </Box>
    </Box>
  );
}

export function NewInSlider() {
    return(
      <Box className='container-x container-y'>
          <Tap tapItems={'new in'} ourColor='#ec7532' ourBorderColor='#d8d8d8' />
          <Box sx={{display: {sm: "flex"}, justifyContent: "space-between", gap: '30px', paddingTop: '40px'}}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </Box>
      </Box>
    );
}

type Movie = {
  label: string;
  coverImgPath: string;
  genre: string[];
  releasedDate: string;
}

// interface Step {
//   label: string;
//   imgPath: string;
//   state: string;
//   genre: string[];
// }

export function SliderComingSoon(){
  const [currentMovie, setCurrentMovie] = React.useState<Movie>(movies[0]);

  const handleClick = (movie : Movie) => {
    setCurrentMovie(movie)
  }
  return(
    <Box className='container-y' paddingBottom='0 !important' sx={{backgroundColor: '#000'}}>
      <Box className='container-x'>
        <Tap tapItems={'coming soon'}/>
          {currentMovie && 
            (
              <Box sx={{padding: '40px 0', display: 'flex', flexDirection: 'column-reverse',  [`@media (min-width: 600px)`]: {flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', gap: '30px'}}}>
                <Box sx={{width: '100%', [`@media (min-width: 600px)`]: {width: '50%'}, overflow: 'hidden'}}>
                  <img src={currentMovie.coverImgPath} alt={currentMovie.label} style={{ width: '100%' }} />
                </Box>
                <Box textAlign={'left'} sx={{width: '50%', minWidth: '260px', paddingBottom: '40px', [`@media (min-width: 600px)`]: {paddingBottom: '0'}}}>
                  {currentMovie.genre.map(((type, index) => (
                    <Typography key={index} className='genre' color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase"}}>{type}</Typography>
                  )))}
                  <Typography variant='h4'>{currentMovie.label}</Typography>
                  {/* <Box sx={{display: 'flex', alignItems: 'center'}}> */}
                    <Rating value={5} readOnly size='small' sx={{marginRight: '8px'}}/>
                    <Typography sx={{ fontSize: '14px', opacity: '.75', display: 'inline-block'}}><CalendarTodayIcon sx={{ fontSize: '14px', marginRight: '3px'}} /> {currentMovie.releasedDate}</Typography>
                  {/* </Box> */}
                  <Typography marginTop={'20px'}>
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                  </Typography>
                  <a href='/' className='show-details' style={{color: '#ec7532', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '4px', transition: 'all 300ms ease-in-out', display: 'flex', alignItems: 'center', margin: '20px 0 8px'}}>full synopsis <ChevronRightIcon style={{fontSize: '16px'}}/></a>
                </Box>
              </Box>
            )}
        
        <Box padding={'55px 0'} bgcolor={'rgba(0, 0, 0, .4)'} sx={{display: 'flex', gap: '30px'}}>
          {movies.filter((movie) => movie.state === "coming soon").map((movie, index) => (
            <ComingSoonCard movie={movie} key={index} handleClick={() => handleClick({label: movie.label, coverImgPath: movie.coverImgPath, genre: movie.genre, releasedDate: movie.releasedDate})} currentMovie={currentMovie} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
