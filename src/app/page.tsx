import Image from "next/image";
import styles from "./page.module.css";
import { NewInSlider, SliderBanner, SliderComingSoon } from '@/components/Slider/Slider'
import { Box, Typography } from '@mui/material'
import Tap from '@/components/Tap/Tap'
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
