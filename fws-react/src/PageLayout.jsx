import React from 'react'
import Stack from '@mui/material/Stack'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'


const PageLayout = () => {
  return (
    <Stack spacing={0}>
      <AboutUs />
      <OurServices />
      </Stack>
  )
}

export default PageLayout