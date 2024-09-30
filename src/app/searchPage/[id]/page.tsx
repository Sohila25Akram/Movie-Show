import Banner from '@/components/Banner/Banner'
import { PlayTrailerButton } from '@/components/Button/Button'
import Comment from '@/components/Comment/Comment'
import Form from '@/components/Form/Form'
import Tap from '@/components/Tap/Tap'
import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <>  
    <Banner subTitle='thriller, horror' title='locked in' imgBackground='//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/hero-whatson-1.png'>
        <Typography marginBottom='20px'>
            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <Typography textAlign='center' sx={{border: "2px solid #fff", borderRadius: "50%", width: '48px', height: '48px', lineHeight: '48px', fontSize: '13px', fontWeight: 'bold'}}>18</Typography>
            <PlayTrailerButton />
            <Rating name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} size='small' readOnly />
        </Box>
    </Banner>
    <div className='container-x container-y'>
        <Box sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}}}>
            <Box flexGrow={1}>
                <Tap tapItems='synopsis' ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Box sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}, alignItems: 'flex-start'}}>
                    <Box borderRadius='10px' overflow='hidden' minWidth='178px'>
                        <img src="//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-7.jpg" alt='' style={{display: 'block', width: '100%'}}/>
                    </Box>
                    <Box>
                        <Typography variant='h3' fontSize='24px' color='#101010' letterSpacing='1px' marginBottom='10px'>The plot</Typography>
                        <Typography color='#717171' marginBottom='20px'>
                            Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatemdolore eu feugiat nulla facilisisat vero eros et accumsan et iusto odio dignissimqui blandit praesen.
                        </Typography>
                        <Typography color='#717171' marginBottom='20px'>
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                        </Typography>
                        <ul style={{margin:'25px 0', color:'#717171', display: 'flex', flexDirection: 'column', listStyle: 'none'}}>
                            <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>director</span><span>hiohoi ijio</span>
                            </li>
                            <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a', display: 'inline-block', width: '115px'}}>director</span><span>hiohoi ijio</span>
                            </li>
                            <li style={{marginBottom: '10px', fontSize: '12px', width:'100%'}}>
                                <span style={{textTransform: 'uppercase', letterSpacing: '1.5px', color:'#4a4a4a',  display: 'inline-block', width: '115px'}}>director</span><span>hiohoi ijio</span>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box minWidth='250px' sx={{ width: {xs: '100%', md: '323px', lg: '360px'}}}>
                <Tap tapItems='viewing times' ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <ul style={{paddingLeft: '40px', listStyle: 'none', color: '#4a4a4a', display: 'flex', flexDirection: 'column'}}>
                    <li style={{marginBottom: '10px', display: 'inline-block'}}><span style={{letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '12px'}}>monday</span> <Typography sx={{padding: '7px 10px', margin: '0 5px 5px 0', color: '#717171', backgroundColor: '#d8d8d8', borderRadius: '5px', fontSize: '14px', width: 'fit-content', display: 'inline-block', letterSpacing: '0'}}>30:00 pm</Typography></li>
                    <li style={{marginBottom: '10px', display: 'inline-block'}}><span style={{letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '12px'}}>saterday</span></li>
                </ul>
            </Box>
        </Box>
        <Box  sx={{[`@media (min-width: 768px)`]:{ display: 'flex', gap: '30px'}}}>
            <Box>
                <Tap tapItems='comments'  ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Comment ourBackground='#fff' ourTransform='0' ourPadding='0 0' />
                <Comment ourBackground='#fff' ourTransform='0' ourPadding='0 0' />
            </Box>
            <Box minWidth='250px'>
                <Tap tapItems='leave a comment'  ourColor='#ec7532' ourMargin='0 0 40px' ourBorderColor='#d8d8d8' />
                <Form />
            </Box>
        </Box>
    </div>
    </>

  )
}
