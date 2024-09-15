import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Rating, Box, Link } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HoverMoviePhoto from '../HoverMoviePhoto/HoverMoviePhoto';

export default function MovieCard() {
  return (
    <Card sx={{ minWidth: '230px', width: {xs: "100%", sm: '42%'}, boxShadow: "none", textAlign: "center" }}>
      <HoverMoviePhoto />
      <CardContent sx={{padding: "0px !important"}}>
        <Typography gutterBottom variant="h6" component="div" marginBottom={'30px'} sx={{color: '#4a4a4a', fontSize: '18px', letterSpacing: '2px'}}>
          Lizard
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <Stack>
          <Rating value={4} readOnly size='small' sx={{ margin: "0 auto"}} />
        </Stack>
      </CardContent>
    </Card>
  );
}
