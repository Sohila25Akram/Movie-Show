import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import './Tap.css'

const currentWeekDay = new Date().toLocaleDateString('en-US', { weekday: 'short' })

type Iprops = {
  tapItems : string | string[],
  ourColor?: string,
  ourBorderColor?: string,
  ourMargin?: string,
  ourPadding?: string,
  isUpper?: boolean
}

export default function Tap({tapItems, ourColor= '#fff', ourBorderColor= 'rgba(255, 255, 255, .2)', ourMargin= '0 0 0 0', ourPadding= '20px 0', isUpper= true}: Iprops) {
  return (
    <List disablePadding sx={{borderBottom: `1px solid ${ourBorderColor}`, color: ourColor, display: 'flex', flexWrap: 'wrap', margin: `${ourMargin}`}}>
        {Array.isArray(tapItems) ? tapItems.map((item: string) => (
        <ListItem key={item} disablePadding sx={{display: "inline-block", width:"fit-content"}} className='nav-item'>
            <ListItemButton sx={{ textAlign: 'center' , padding: "20px 24px"}} >
                <ListItemText primary={item.toLowerCase() === currentWeekDay.toLowerCase() ? 'Today' : item} />
            </ListItemButton>
        </ListItem>
        )) : 
            <Typography variant='h3' fontSize={'18px'} className='section-label' sx={{width: "100%", borderBottom: `1px solid ${ourBorderColor}`, textTransform: `${isUpper? 'uppercase': 'none'}`, color: ourColor, textAlign: "left", padding: `${ourPadding}`, position: "relative"}}>{tapItems}</Typography>
        }
        {/* {children} */}
    </List>
  )
}
