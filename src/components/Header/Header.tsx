"use client";

import { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
// import { MenuIcon } from '@mui/icons-material';
import './Header.css'
import Tap from '../Tap/Tap';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import NavLinks from '../NavLinks/NavLinks';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tapItems: object = 
    {
        "Home": "/",
        "What's on": "/searchPage",
        "News": "/news",
        "Contact Us": "/contact"
    };

    // const router = useRouter();

  return (
    <>
    <AppBar className='container-x' position="static" sx={{backgroundColor: "transparent", boxShadow: "none", position: "absolute", zIndex: "9999999", padding: '0 15px'}}>
        <Typography margin={'30px 15px 0 0'} padding='0 15px' fontSize={'14px'} fontWeight={'bold'} sx={{textAlign: "right", padding: {xs: "0 16px", sm: "0 24px"}}}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{padding: 0, mr:"1rem"}}>
                {/* <MenuIcon /> */}
                <CallIcon fontSize='small' />
            </IconButton>
            123 456 789
        </Typography>
        <Toolbar variant="dense" sx={{display: "flex", justifyContent: "space-between", padding: '0 !important'}}>
            <Typography variant="h6" color="inherit" component="div">
            Photos
            </Typography>
            <Box sx={{display: {xs: "none", sm:"flex"}}}>
                {/* <Tap tapItems={tapItems} /> */}
                <Box sx={{borderBottom: `1px solid rgba(255, 255, 255, .2)`, color: '#fff', display: 'flex', flexWrap: 'wrap'}}>
                    {Object.entries(tapItems).map(([key, value]) => (
                        <Link href={value} key={key} style={{display: 'inline-block', padding: '20px 24px'}}>
                            {key}  
                        </Link>
                    ))}
                </Box>
                {/* <NavLinks /> */}
            </Box>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: {xs: "block", sm: "none"}, padding: "0"}} onClick={() => setIsOpen(true)}>
                {/* <MenuIcon /> */}
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='top'
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Box sx={{padding: '15px 0'}} >
                    {Object.entries(tapItems).map(([key, value]) => (
                        <Link href={`/${value}`} key={key} className='nav-item' style={{display: 'block', padding: '10px 15px', textAlign: 'center'}}>
                            {key}  
                        </Link>
                    ))}
                </Box>
            </Drawer>
        </Toolbar>
    </AppBar>
    </>
  )
}
