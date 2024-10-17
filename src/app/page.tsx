import { NewInSlider, SliderBanner, SliderComingSoon } from '@/components/Slider/Slider'
import { Box } from '@mui/material'
import OnThisWeek from '@/components/OnThisWeek/OnThisWeek'
import Help from '@/components/Help/Help'

export default function Home() {
  return (
      <div>
        <SliderBanner />
          <NewInSlider />
          <Box className="container-x container-y">
            <OnThisWeek />
          </Box>
          <SliderComingSoon />
          <Help />
      </div>
  );
}
