import React from 'react'
import Carousel from './home/carousel'
import HomeSecOne from './home/homeSecOne'
import HomesecTwo from './home/homesecTwo'
import Slider from './home/slider'

const Home = () => {
  return (
    <>
      <Slider/>
      <Carousel />
      <HomeSecOne />
      <HomesecTwo />
    </>
  )
}

export default Home

